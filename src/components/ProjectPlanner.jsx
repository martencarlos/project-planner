// src/components/ProjectPlanner.jsx
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import TeamModal from './TeamModal';
import TaskModal from './TaskModal';
import Gantt from './Gantt';
import Dashboard from './Dashboard';
import { useTeam } from '../hooks/useTeam';
import { useTasks } from '../hooks/useTasks';

const ProjectPlanner = () => {
  const { team, loading: teamLoading, error: teamError, addTeamMember, deleteTeamMember } = useTeam();
  const { tasks, loading: tasksLoading, error: tasksError, addTask, updateTask, deleteTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeTab, setActiveTab] = useState('gantt');

  // Event handlers
  const handleTaskClick = (task) => {
    if (task === null) {
      setSelectedTask(null);
    } else {
      const fullTask = tasks.find(t => t.id === task.id);
      setSelectedTask(fullTask);
    }
  };

  const handleTaskComplete = async (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      await updateTask(taskId, {
        ...task,
        status: 'completed',
        actualEnd: new Date().toISOString()
      });
    }
  };

  // Show loading state
  if (teamLoading || tasksLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // Show error state
  if (teamError || tasksError) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {teamError || tasksError}
      </div>
    );
  }

  return (
    <>
      <div className="p-6 max-w-7xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Project Planner</h1>
          <div className="flex gap-4 items-center">
            <TeamModal 
              team={team} 
              onAdd={addTeamMember}
              onDelete={deleteTeamMember}
            />
            <TaskModal 
              team={team} 
              tasks={tasks}
              onAdd={addTask}
              onUpdate={updateTask}
              onDelete={deleteTask}
              existingTask={selectedTask}
              onClose={() => setSelectedTask(null)}
            />
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="gantt" className="space-y-4">
            <Gantt
              tasks={tasks.map(task => ({
                ...task,
                plannedStart: new Date(task.plannedStart),
                plannedEnd: new Date(task.plannedEnd),
                actualStart: task.actualStart ? new Date(task.actualStart) : null,
                actualEnd: task.actualEnd ? new Date(task.actualEnd) : null,
              }))}
              onTaskClick={handleTaskClick}
              onTaskComplete={handleTaskComplete}
            />
          </TabsContent>

          <TabsContent value="dashboard">
            <Dashboard 
              tasks={tasks} 
              team={team}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div 
        className="fixed inset-0" 
        style={{ zIndex: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelectedTask(null);
          }
        }}
      />
    </>
  );
};

export default ProjectPlanner;