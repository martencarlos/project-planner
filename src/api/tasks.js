// src/api/tasks.js
import prisma from '../lib/prisma';

export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        team: true
      }
    });
    return { tasks };
  } catch (error) {
    return { error: 'Failed to fetch tasks' };
  }
}

export async function createTask(data) {
  try {
    const task = await prisma.task.create({
      data: {
        name: data.name,
        phase: data.phase,
        plannedStart: new Date(data.plannedStart),
        plannedEnd: new Date(data.plannedEnd),
        actualStart: data.actualStart ? new Date(data.actualStart) : null,
        actualEnd: data.actualEnd ? new Date(data.actualEnd) : null,
        status: data.status,
        duration: data.duration,
        description: data.description,
        assignedTo: data.assignedTo
      },
      include: {
        team: true
      }
    });
    return { task };
  } catch (error) {
    return { error: 'Failed to create task' };
  }
}

export async function updateTask(id, data) {
  try {
    const task = await prisma.task.update({
      where: { id },
      data: {
        name: data.name,
        phase: data.phase,
        plannedStart: new Date(data.plannedStart),
        plannedEnd: new Date(data.plannedEnd),
        actualStart: data.actualStart ? new Date(data.actualStart) : null,
        actualEnd: data.actualEnd ? new Date(data.actualEnd) : null,
        status: data.status,
        duration: data.duration,
        description: data.description,
        assignedTo: data.assignedTo
      },
      include: {
        team: true
      }
    });
    return { task };
  } catch (error) {
    return { error: 'Failed to update task' };
  }
}

export async function deleteTask(id) {
  try {
    await prisma.task.delete({
      where: { id }
    });
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete task' };
  }
}