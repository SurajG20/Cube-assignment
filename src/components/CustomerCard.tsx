import React from 'react';

export type Customer = {
  id: number;
  name: string;
  title: string;
  address: string;
};

type CustomerCardProps = {
  item: Customer;
};

export const CustomerCard: React.FC<CustomerCardProps> = ({ item }) => {
  return (
    <div className='customer-list__item'>
      <p className='customer-list__name'>{item.name}</p>
      <div className='customer-list__title'>{item.title}</div>
    </div>
  );
};
