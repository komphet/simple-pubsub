import React from 'react';

const MachineList = ({ machines, onEditStock, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {machines.map((machine) => (
            <tr key={machine._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{machine.name}</td>
              <td className="py-2 px-4 border-b">{machine.stock}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onEditStock(machine)}
                  className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                >
                  Update Stock
                </button>
                <button
                  onClick={() => onDelete(machine._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineList;
