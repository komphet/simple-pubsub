import React, { useEffect, useState } from 'react';
import MachineList from '../components/MachineList';
import MachineForm from '../components/MachineForm';

const Home = () => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      const response = await fetch('http://localhost:5000/machines');
      const data = await response.json();
      setMachines(data);
    };

    fetchMachines();
  }, []);

  const handleAddMachine = async (machine) => {
    const response = await fetch('http://localhost:5000/machines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(machine),
    });

    const newMachine = await response.json();
    setMachines([...machines, newMachine]);
  };

  const handleUpdateStock = async (machine) => {
    const newStock = prompt("Enter new stock value:", machine.stock);

    if (newStock) {
      const response = await fetch(`http://localhost:5000/machines/${machine._id}/stock`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stock: parseInt(newStock, 10) }),
      });

      if (response.ok) {
        const updatedMachine = await response.json();
        setMachines(machines.map(m => (m._id === updatedMachine._id ? updatedMachine : m)));
      }
    }
  };

  const handleDeleteMachine = async (id) => {
    const response = await fetch(`http://localhost:5000/machines/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setMachines(machines.filter(machine => machine._id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Machine Management</h1>
      <MachineForm onAdd={handleAddMachine} />
      <h2 className="text-xl font-semibold mt-6">Machines</h2>
      <MachineList
        machines={machines}
        onEditStock={handleUpdateStock}
        onDelete={handleDeleteMachine}
      />
    </div>
  );
};

export default Home;
