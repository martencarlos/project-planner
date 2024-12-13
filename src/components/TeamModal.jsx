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