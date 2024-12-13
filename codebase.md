# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@components/",
    "utils": "@lib/utils",
    "ui": "@components/ui",
    "lib": "@lib",
    "hooks": "@hooks"
  },
  "iconLibrary": "lucide"
}
```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# jsconfig.json

```json
{
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "@components/*": ["src/components/*"],
        "@actions/*": ["src/actions/*"],
        "@lib/*": ["src/lib/*"],
        "@context/*": ["src/context/*"],
        "@providers/*": ["src/providers/*"],
        "@hooks/*": ["src/hooks/*"],
      }
    }
  }
  
```

# package.json

```json
{
  "name": "project-planner",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.1",
    "@vitejs/plugin-react": "^4.3.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@shadcn/ui": "^0.0.4",
    "@types/node": "^22.10.2",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "sass-embedded": "^1.82.0",
    "tailwindcss": "^3.4.16",
    "vite": "^6.0.1"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```

# src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src\App.jsx

```jsx
import React from 'react'
import ProjectPlanner from './components/ProjectPlanner'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ProjectPlanner />
    </div>
  )
}

export default App
```

# src\assets\react.svg

This is a file of the type: SVG Image

# src\components\Dashboard.jsx

```jsx
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
```

# src\components\Gantt.jsx

```jsx
// src/components/Gantt.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  format, addDays, eachDayOfInterval, startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth, differenceInDays, isSameDay,
  addWeeks, addMonths, eachWeekOfInterval, eachMonthOfInterval,
  startOfYear, endOfYear, getWeek, min, max
} from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Gantt = ({ tasks = [], onTaskClick }) => {
  const [view, setView] = useState('Week');
  const [timeBlocks, setTimeBlocks] = useState([]);
  const [hoveredTask, setHoveredTask] = useState(null);
  const containerRef = useRef(null);
  
  // Group tasks by phase
  const tasksByPhase = tasks.reduce((acc, task) => {
    const phase = task.phase || 'Unassigned';
    if (!acc[phase]) {
      acc[phase] = [];
    }
    acc[phase].push(task);
    return acc;
  }, {});

  // Calculate total rows needed (sum of tasks in each phase plus phase headers)
  const totalRows = Object.entries(tasksByPhase).reduce((acc, [_, phaseTasks]) => {
    return acc + phaseTasks.length + 1; // +1 for phase header
  }, 0);
  
  const headerHeight = view === 'Month' ? 60 : 40;
  const rowHeight = 40;
  const leftColumnWidth = 200;
  const getBlockWidth = () => {
    switch (view) {
      case 'Month': return 120;
      case 'Week': return 100;
      case 'Day': return 50;
      default: return 50;
    }
  };

  // Calculate date range that includes all tasks
  const calculateDateRange = () => {
    const allDates = tasks.flatMap(task => [
      new Date(task.plannedStart),
      new Date(task.plannedEnd)
    ]);
    
    const minDate = min(allDates);
    const maxDate = max(allDates);

    return { minDate, maxDate };
  };
  
  // Calculate time blocks based on view and task date range
  useEffect(() => {
    const { minDate, maxDate } = calculateDateRange();
    let blocks = [];
    
    switch (view) {
      case 'Month': {
        const start = startOfMonth(minDate);
        const end = endOfMonth(maxDate);
        blocks = eachMonthOfInterval({ start, end }).map(date => ({
          start: date,
          end: endOfMonth(date),
          label: format(date, 'MMMM'),
          sublabel: format(date, 'yyyy')
        }));
        break;
      }
      case 'Week': {
        const start = startOfWeek(minDate);
        const end = endOfWeek(maxDate);
        blocks = eachWeekOfInterval({ start, end }).map(date => ({
          start: date,
          end: endOfWeek(date),
          label: `Week ${getWeek(date)}`,
          sublabel: `${format(date, 'MMM d')} - ${format(endOfWeek(date), 'MMM d')}`
        }));
        break;
      }
      default: {
        const start = minDate;
        const end = maxDate;
        blocks = eachDayOfInterval({ start, end }).map(date => ({
          start: date,
          end: date,
          label: format(date, 'd'),
          sublabel: format(date, 'EEE')
        }));
      }
    }
    
    setTimeBlocks(blocks);
  }, [view, tasks]);

  const blockWidth = getBlockWidth();
  const totalWidth = leftColumnWidth + (timeBlocks.length * blockWidth);
  const totalHeight = headerHeight + (totalRows * rowHeight);

  const getTaskBarStyles = (task) => {
    const taskStart = new Date(task.plannedStart);
    const taskEnd = new Date(task.plannedEnd);
    const firstBlockStart = timeBlocks[0]?.start;
    
    if (!firstBlockStart) return { x: 0, width: 0 };
    
    const startOffset = differenceInDays(taskStart, firstBlockStart) * (blockWidth / getDaysInBlock());
    const width = (differenceInDays(taskEnd, taskStart) + 1) * (blockWidth / getDaysInBlock());
    
    return {
      x: leftColumnWidth + Math.max(0, startOffset),
      width: Math.max(0, Math.min(width, totalWidth - leftColumnWidth - startOffset))
    };
  };

  const getDaysInBlock = () => {
    switch (view) {
      case 'Month': return 30;
      case 'Week': return 7;
      case 'Day': return 1;
      default: return 1;
    }
  };

  const getProgressColorClass = (status) => {
    switch (status) {
      case 'completed': return 'fill-green-500';
      case 'in-progress': return 'fill-blue-500';
      case 'blocked': return 'fill-red-500';
      default: return 'fill-gray-400';
    }
  };

  // Calculate row index for a task
  const getRowIndex = (phaseIndex, taskIndex) => {
    let rowIndex = 0;
    Object.entries(tasksByPhase).forEach(([phase, phaseTasks], index) => {
      if (index < phaseIndex) {
        rowIndex += phaseTasks.length + 1; // +1 for phase header
      }
    });
    return rowIndex + taskIndex + 1; // +1 to account for current phase header
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Project Timeline</CardTitle>
        <Select value={view} onValueChange={setView}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Day">Daily</SelectItem>
            <SelectItem value="Week">Weekly</SelectItem>
            <SelectItem value="Month">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <div ref={containerRef} className="relative">
          <svg 
            width={totalWidth} 
            height={totalHeight} 
            className="font-sans"
          >
            {/* Background */}
            <rect 
              x="0" 
              y="0" 
              width={totalWidth} 
              height={totalHeight} 
              className="fill-white"
            />
            
            {/* Vertical grid lines */}
            {timeBlocks.map((block, i) => (
              <line
                key={block.start.toString()}
                x1={leftColumnWidth + (i * blockWidth)}
                y1={0}
                x2={leftColumnWidth + (i * blockWidth)}
                y2={totalHeight}
                className="stroke-gray-200"
                strokeWidth="1"
              />
            ))}
            
            {/* Time block headers */}
            {timeBlocks.map((block, i) => (
              <g key={block.start.toString()}>
                <text
                  x={leftColumnWidth + (i * blockWidth) + (blockWidth / 2)}
                  y={headerHeight / 3}
                  className="text-sm fill-gray-900 font-medium text-center"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {block.label}
                </text>
                <text
                  x={leftColumnWidth + (i * blockWidth) + (blockWidth / 2)}
                  y={headerHeight * 0.7}
                  className="text-xs fill-gray-500 text-center"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {block.sublabel}
                </text>
              </g>
            ))}
            
            {/* Phases and Tasks */}
            {Object.entries(tasksByPhase).map(([phase, phaseTasks], phaseIndex) => {
              let currentRowIndex = getRowIndex(phaseIndex, -1);
              
              return (
                <g key={phase}>
                  {/* Phase header */}
                  <rect
                    x="0"
                    y={headerHeight + (currentRowIndex * rowHeight)}
                    width={totalWidth}
                    height={rowHeight}
                    className="fill-gray-100"
                  />
                  <text
                    x="10"
                    y={headerHeight + (currentRowIndex * rowHeight) + (rowHeight / 2)}
                    className="text-sm fill-gray-900 font-medium"
                    alignmentBaseline="middle"
                  >
                    {phase.charAt(0).toUpperCase() + phase.slice(1)}
                  </text>

                  {/* Tasks in this phase */}
                  {phaseTasks.map((task, taskIndex) => {
                    const rowIndex = getRowIndex(phaseIndex, taskIndex);
                    const { x, width } = getTaskBarStyles(task);
                    const y = headerHeight + (rowIndex * rowHeight) + (rowHeight * 0.2);
                    const height = rowHeight * 0.6;

                    return (
                      <g 
                        key={task.id}
                        onClick={() => onTaskClick?.(task)}
                        onMouseEnter={() => setHoveredTask(task)}
                        onMouseLeave={() => setHoveredTask(null)}
                        className="cursor-pointer"
                      >
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          rx={4}
                          className={`${getProgressColorClass(task.status)} transition-opacity duration-200
                            ${hoveredTask?.id === task.id ? 'opacity-80' : 'opacity-60'}`}
                        />
                        
                        {width > 50 && (
                          <text
                            x={x + width/2}
                            y={y + height/2}
                            className="text-xs fill-white font-medium text-center"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                          >
                            {task.name}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })}
            
            {/* Today line */}
            {timeBlocks.some(block => 
              isSameDay(block.start, new Date()) || 
              isSameDay(block.end, new Date())
            ) && (
              <line
                x1={leftColumnWidth + (timeBlocks.findIndex(block => 
                  isSameDay(block.start, new Date()) || 
                  isSameDay(block.end, new Date())
                ) * blockWidth)}
                y1={0}
                x2={leftColumnWidth + (timeBlocks.findIndex(block => 
                  isSameDay(block.start, new Date()) || 
                  isSameDay(block.end, new Date())
                ) * blockWidth)}
                y2={totalHeight}
                className="stroke-red-500"
                strokeWidth="2"
                strokeDasharray="4"
              />
            )}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default Gantt;
```

# src\components\lib\utils.ts

```ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

# src\components\ProjectPlanner.jsx

```jsx
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
```

# src\components\TaskModal.jsx

```jsx
// TaskModal.jsx
import React, { useState, useEffect } from 'react';
import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Calendar } from "@components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, ListTodo, Trash2 } from "lucide-react";
import { cn } from "@components/lib/utils";

const TaskModal = ({ team, tasks, setTasks, existingTask = null }) => {
  const defaultTask = {
    id: Date.now().toString(),
    name: '',
    phase: '',
    plannedStart: new Date(),
    plannedEnd: new Date(),
    actualStart: null,
    actualEnd: null,
    status: 'pending',
    assignedTo: '',
    duration: 1,
    description: ''
  };

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(defaultTask);

  useEffect(() => {
    if (existingTask) {
      setTask({
        ...existingTask,
        plannedStart: new Date(existingTask.plannedStart),
        plannedEnd: new Date(existingTask.plannedEnd),
        actualStart: existingTask.actualStart ? new Date(existingTask.actualStart) : null,
        actualEnd: existingTask.actualEnd ? new Date(existingTask.actualEnd) : null,
      });
    } else {
      setTask(defaultTask);
    }
  }, [existingTask]);

  const projectPhases = [
    'Initiation',
    'Planning',
    'Requirements',
    'Design',
    'Development',
    'Testing',
    'Deployment',
    'Maintenance'
  ];

  const statusOptions = [
    'pending',
    'in-progress',
    'completed',
    'blocked',
    'on-hold'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const start = new Date(task.plannedStart);
    const end = new Date(task.plannedEnd);
    const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    const newTask = {
      ...task,
      duration: durationInDays,
      plannedStart: start.toISOString(),
      plannedEnd: end.toISOString(),
      actualStart: task.actualStart?.toISOString() || null,
      actualEnd: task.actualEnd?.toISOString() || null,
    };

    if (existingTask) {
      setTasks(tasks.map(t => t.id === task.id ? newTask : t));
    } else {
      setTasks([...tasks, newTask]);
    }

    setTask(defaultTask);
    setOpen(false);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(t => t.id !== task.id));
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ListTodo className="h-4 w-4" />
          {existingTask ? 'Edit Task' : 'Add Task'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{existingTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Task Name</Label>
            <Input
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              placeholder="Enter task name"
              required
            />
          </div>

          <div>
            <Label>Project Phase</Label>
            <Select 
              value={task.phase} 
              onValueChange={(value) => setTask({ ...task, phase: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select phase" />
              </SelectTrigger>
              <SelectContent>
                {projectPhases.map((phase) => (
                  <SelectItem key={phase.toLowerCase()} value={phase.toLowerCase()}>
                    {phase}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Planned Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !task.plannedStart && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {task.plannedStart ? format(task.plannedStart, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={task.plannedStart}
                    onSelect={(date) => setTask({ ...task, plannedStart: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Planned End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !task.plannedEnd && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {task.plannedEnd ? format(task.plannedEnd, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={task.plannedEnd}
                    onSelect={(date) => setTask({ ...task, plannedEnd: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div>
            <Label>Status</Label>
            <Select 
              value={task.status} 
              onValueChange={(value) => setTask({ ...task, status: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Assigned To</Label>
            <Select 
              value={task.assignedTo} 
              onValueChange={(value) => setTask({ ...task, assignedTo: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                {team.map((member) => (
                  <SelectItem key={member.id} value={member.id}>
                    {member.name} - {member.role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Description</Label>
            <Input
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              placeholder="Enter task description"
            />
          </div>

          {task.status === 'in-progress' && (
            <div>
              <Label>Actual Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !task.actualStart && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {task.actualStart ? format(task.actualStart, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={task.actualStart}
                    onSelect={(date) => setTask({ ...task, actualStart: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {task.status === 'completed' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Actual Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !task.actualStart && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {task.actualStart ? format(task.actualStart, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={task.actualStart}
                      onSelect={(date) => setTask({ ...task, actualStart: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Actual End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !task.actualEnd && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {task.actualEnd ? format(task.actualEnd, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={task.actualEnd}
                      onSelect={(date) => setTask({ ...task, actualEnd: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              {existingTask ? 'Update Task' : 'Create Task'}
            </Button>
            
            {existingTask && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                className="px-3"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
```

# src\components\TeamModal.jsx

```jsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as  UserPlus} from "lucide-react";

// TeamModal Component
const TeamModal = ({ team, setTeam }) => {
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    availability: 100,
    hourlyRate: 0
  });

  const roles = [
    'Project Manager',
    'Developer',
    'Designer',
    'QA Engineer',
    'Business Analyst',
    'DevOps Engineer'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeam([...team, { ...newMember, id: Date.now().toString() }]);
    setNewMember({ name: '', role: '', availability: 100, hourlyRate: 0 });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Manage Team
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Team Management</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Role</Label>
            <Select onValueChange={(value) => setNewMember({ ...newMember, role: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Availability (%)</Label>
            <Input
              type="number"
              min="0"
              max="100"
              value={newMember.availability}
              onChange={(e) => setNewMember({ ...newMember, availability: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <Label>Hourly Rate (€)</Label>
            <Input
              type="number"
              min="0"
              value={newMember.hourlyRate}
              onChange={(e) => setNewMember({ ...newMember, hourlyRate: parseFloat(e.target.value) })}
            />
          </div>
          <Button type="submit">Add Team Member</Button>
        </form>
        
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Current Team</h3>
          <div className="space-y-2">
            {team.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <Badge>{member.availability}%</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal;
```

# src\components\ui\badge.jsx

```jsx
import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@components/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }

```

# src\components\ui\button.jsx

```jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@components/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }

```

# src\components\ui\calendar.jsx

```jsx
"use client";
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@components/lib/utils"
import { buttonVariants } from "@components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }

```

# src\components\ui\card.jsx

```jsx
import * as React from "react"

import { cn } from "@components/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# src\components\ui\dialog.jsx

```jsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@components/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

# src\components\ui\input.jsx

```jsx
import * as React from "react"

import { cn } from "@components/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }

```

# src\components\ui\label.jsx

```jsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@components/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

# src\components\ui\popover.jsx

```jsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@components/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```

# src\components\ui\select.jsx

```jsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@components/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

# src\components\ui\tabs.jsx

```jsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@components/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

# src\hooks\useLocalStorage.js

```js
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Initialize state with value from localStorage if it exists, otherwise use initialValue
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
```

# src\index.css

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
 
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
 
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
 
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
 
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
 
    --radius: 0.5rem;
 
    --chart-1: 12 76% 61%;
 
    --chart-2: 173 58% 39%;
 
    --chart-3: 197 37% 24%;
 
    --chart-4: 43 74% 66%;
 
    --chart-5: 27 87% 67%;
  }
 
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
 
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
 
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
 
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
 
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
 
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
 
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
 
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}


/* frappe corrections */
.gantt .grid-background {
  fill: white !important;
}
```

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

# tailwind.config.js

```js
// tailwind.config.js
const path = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
```

# vite.config.js

```js
// vite.config.js
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
})
```

