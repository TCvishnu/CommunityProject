import React from 'react';
import Edit from './icons/Edit';
import Delete from './icons/Delete';

export default function Actions() {
  return (
    <div className='w-full flex gap-6 justify-center'>
        <Edit /> 
        <Delete />
    </div>
  )
}
