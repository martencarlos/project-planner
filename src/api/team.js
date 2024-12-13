// src/api/team.js
import prisma from '../lib/prisma';

export async function getTeamMembers() {
  try {
    const team = await prisma.team.findMany();
    return { team };
  } catch (error) {
    return { error: 'Failed to fetch team members' };
  }
}

export async function createTeamMember(data) {
  try {
    const member = await prisma.team.create({
      data: {
        name: data.name,
        role: data.role,
        hourlyRate: data.hourlyRate,
        availability: data.availability
      }
    });
    return { member };
  } catch (error) {
    return { error: 'Failed to create team member' };
  }
}

export async function deleteTeamMember(id) {
  try {
    await prisma.team.delete({
      where: { id }
    });
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete team member' };
  }
}
