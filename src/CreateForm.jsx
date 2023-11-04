import React, { useState } from 'react';
import { supabase } from './supabase';

const CreateForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [species, setSpecies] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('crewmates').insert([
        { name, role, species, specialty, description },
      ]);
      if (error) {
        throw new Error(error.message);
      }
      console.log('Crewmate added successfully:', data);
    } catch (error) {
      console.error('Error adding crewmate:', error.message);
    }
  };

  return (
    <div>
      <h2>Create Crewmate</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Role:</label>
        <input type="text" value={role} onChange={handleRoleChange} />
        <label>Species:</label>
        <input type="text" value={species} onChange={handleSpeciesChange} />
        <label>Specialty:</label>
        <input type="text" value={specialty} onChange={handleSpecialtyChange} />
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} />
        <button type="submit">Add Crewmate</button>
      </form>
    </div>
  );
};

export default CreateForm;
