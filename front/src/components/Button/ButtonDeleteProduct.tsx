'use client';

import React from 'react';

interface ButtonPropsDelete {
    id: number; 
    onDelete: (id: number) => void; // Función para manejar la eliminación
}

const ButtonDeleteProduct: React.FC<ButtonPropsDelete> = ({ id, onDelete }) => {
    const handleDelete = () => {
        onDelete(id); 
    };

    return (
        <button className="text-red-600" onClick={handleDelete}> Eliminar</button>
    );
};

export default ButtonDeleteProduct;