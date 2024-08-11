import React from 'react';
import { CustomerCardProps } from '../types';



export const CustomerCard: React.FC<CustomerCardProps> = ({ item, setSelectedCustomer }) => {
  return (
    <div className='customer-list__item' onClick={() => setSelectedCustomer(item)}>
      <p className='customer-list__name'>{item.name}</p>
      <div className='customer-list__title'>{item.title}</div>
    </div>
  );
};
