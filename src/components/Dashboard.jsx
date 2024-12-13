// Dashboard Component

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = ({ tasks, team, phases }) => {
    const calculateMetrics = () => {
      const totalTasks = tasks.length;
      const completedTasks = tasks.filter(task => task.status === 'completed').length;
      const totalCost = tasks.reduce((acc, task) => {
        const assignedMember = team.find(m => m.id === task.assignedTo);
        return acc + (task.duration * 8 * (assignedMember?.hourlyRate || 0));
      }, 0);
  
      return { totalTasks, completedTasks, totalCost };
    };
  
    const metrics = calculateMetrics();
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((metrics.completedTasks / metrics.totalTasks) * 100)}%
            </div>
            <p className="text-sm text-gray-500">
              {metrics.completedTasks} of {metrics.totalTasks} tasks completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €{metrics.totalCost.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            {team.map(member => (
              <div key={member.id} className="flex justify-between items-center mb-2">
                <span>{member.name}</span>
                <Badge variant="outline">{member.availability}%</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  };

  export default Dashboard;