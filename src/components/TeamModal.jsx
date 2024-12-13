import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as UserPlus, Trash2 } from "lucide-react";

const ROLES_WITH_RATES = {
  'Project Manager': 85,
  'Developer': 75,
  'Designer': 65,
  'QA Engineer': 55,
  'Business Analyst': 70,
  'DevOps Engineer': 80
};

const TeamModal = ({ team, setTeam }) => {
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    availability: 100,
    hourlyRate: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeam([...team, { ...newMember, id: Date.now().toString() }]);
    // Reset form but keep modal open
    setNewMember({
      name: '',
      role: '',
      availability: 100,
      hourlyRate: 0
    });
  };

  const handleRoleChange = (value) => {
    setNewMember({
      ...newMember,
      role: value,
      hourlyRate: ROLES_WITH_RATES[value] || 0
    });
  };

  const handleDeleteMember = (memberId) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      setTeam(team.filter(member => member.id !== memberId));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Manage Team
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Team Management</DialogTitle>
        </DialogHeader>
        
        {/* Main content container with grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side - Add member form */}
          <div>
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
                <Select onValueChange={handleRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ROLES_WITH_RATES).map(([role, rate]) => (
                      <SelectItem key={role} value={role}>
                        {role} (€{rate}/hr)
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
          </div>

          {/* Right side - Team list */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Current Team</h3>
            <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2">
              {team.map((member) => (
                <Card key={member.id} className="group relative">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500">
                        {member.role} - €{member.hourlyRate}/hr
                      </p>
                    </div>
                    <div className="flex items-center gap-4 min-w-fit">
                      <Badge>{member.availability}%</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleDeleteMember(member.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal;