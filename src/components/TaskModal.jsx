// TaskModal.jsx
import React, { useState, useEffect } from 'react';
import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
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
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

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

  const handleStartDateSelect = (date) => {
    setTask(prev => ({
      ...prev,
      plannedStart: date,
      plannedEnd: date > prev.plannedEnd ? date : prev.plannedEnd
    }));
    setStartDateOpen(false);
    setEndDateOpen(true);
  };

  const handleEndDateSelect = (date) => {
    setTask(prev => ({
      ...prev,
      plannedEnd: date
    }));
    setEndDateOpen(false);
  };

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
              <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
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
                    onSelect={handleStartDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Planned End Date</Label>
              <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
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
                    onSelect={handleEndDateSelect}
                    disabled={(date) => date < task.plannedStart}
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
            <Textarea 
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