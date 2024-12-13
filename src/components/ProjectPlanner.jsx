// src/components/ProjectPlanner.jsx
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamModal from './TeamModal';
import TaskModal from './TaskModal';
import Gantt from './Gantt';
import Dashboard from './Dashboard';
import useLocalStorage from '@/hooks/useLocalStorage';

const ProjectPlanner = () => {
  // State management
  const [team, setTeam] = useLocalStorage('projectTeam', []);
  const [tasks, setTasks] = useLocalStorage('projectTasks', [
    {
      id: '1',
      name: 'Sample Task',
      plannedStart: new Date().toISOString(),
      plannedEnd: new Date(Date.now() + 86400000).toISOString(),
      status: 'pending',
      phase: 'planning',
      assignedTo: ''
    }
  ]);
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

  const handleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: 'completed', actualEnd: new Date().toISOString() }
        : task
    ));
  };

  return (
    <>
      {/* Main content with higher z-index */}
      <div className="p-6 max-w-7xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Project Planner</h1>
          <div className="flex gap-4 items-center">
            <TeamModal team={team} setTeam={setTeam} />
            <TaskModal 
              team={team} 
              tasks={tasks} 
              setTasks={setTasks}
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

      {/* Click capture for deselecting tasks */}
      <div 
        className="fixed inset-0" 
        style={{ zIndex: 0 }}
        onClick={(e) => {
          // Only deselect if clicking directly on this div
          if (e.target === e.currentTarget) {
            setSelectedTask(null);
          }
        }}
      />
    </>
  );
};

export default ProjectPlanner;