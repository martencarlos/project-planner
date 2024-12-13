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