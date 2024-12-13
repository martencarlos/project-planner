// src/hooks/useTeam.js
import { useState, useEffect, useCallback } from 'react';

export function useTeam() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch team members
  const fetchTeam = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/team');
      if (!response.ok) throw new Error('Failed to fetch team');
      const data = await response.json();
      setTeam(data.team);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add team member
  const addTeamMember = async (memberData) => {
    try {
      const response = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData)
      });
      if (!response.ok) throw new Error('Failed to add team member');
      const { member } = await response.json();
      setTeam(prev => [...prev, member]);
      return member;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete team member
  const deleteTeamMember = async (id) => {
    try {
      const response = await fetch(`/api/team/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete team member');
      setTeam(prev => prev.filter(member => member.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Load team on mount
  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return { team, loading, error, addTeamMember, deleteTeamMember, refreshTeam: fetchTeam };
}
