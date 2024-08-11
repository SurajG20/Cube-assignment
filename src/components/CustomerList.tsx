import React from 'react';
import { CustomerCard } from './CustomerCard';
import { Customer, CustomerListProp } from '../types';



const CustomerList: React.FC<CustomerListProp> = ({ customers, setSelectedCustomer }) => {
  return (
    <div className='customer-list'>
      {customers.map((item: Customer) => (
        <CustomerCard key={item.id} item={item} setSelectedCustomer={setSelectedCustomer} />
      ))}
    </div>
  );
};

export default CustomerList;
