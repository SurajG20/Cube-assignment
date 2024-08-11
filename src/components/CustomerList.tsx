import React from 'react';
import { customerData } from '../customerData';
import { CustomerCard, Customer } from './CustomerCard';

const CustomerList: React.FC = () => {
  return (
    <div className='customer-list'>
      {customerData.map((item: Customer) => (
        <CustomerCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CustomerList;
