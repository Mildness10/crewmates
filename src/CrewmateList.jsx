import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { Link } from 'react-router-dom';

const CrewmateList = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      try {
        const { data, error } = await supabase.from('crewmates').select('*');
        if (error) {
          throw new Error(error.message);
        }
        setCrewmates(data);
      } catch (error) {
        console.error('Error fetching crewmates:', error.message);
      }
    };

    fetchCrewmates();
  }, []);
  const handleUpdate = async (id) => {
    const newName = 'Updated Name';
    const newRole = 'Updated Role';
    const newSpecies = 'Updated Species';
    const newSpecialty = 'Updated Specialty';
    const newDescription = 'Updated Description';
  
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .update({ name: newName, role: newRole, species: newSpecies, specialty: newSpecialty, description: newDescription })
        .match({ id });
      if (error) {
        throw new Error(error.message);
      }
      console.log('Crewmate updated successfully:', data);
    } catch (error) {
      console.error('Error updating crewmate:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('crewmates').delete().match({ id });
      if (error) {
        throw new Error(error.message);
      }
      const updatedCrewmates = crewmates.filter((crewmate) => crewmate.id !== id);
      setCrewmates(updatedCrewmates);
      console.log('Crewmate deleted successfully');
    } catch (error) {
      console.error('Error deleting crewmate:', error.message);
    }
  };

  return (
    <div>
      <h2>Crewmate List</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <p>Name: {crewmate.name}</p>
            <p>Role: {crewmate.description}</p>
            <button onClick={() => handleUpdate(crewmate.id)}>Update</button>
            <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
            <Link to={`/crewmates/${crewmate.id}`}>View More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewmateList;
