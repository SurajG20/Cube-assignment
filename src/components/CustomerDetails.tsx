import React from 'react';
import CustomerDetailCard from './CustomerDetailCard';
import ImageGrid from './ImageGrid';
import { CustomerDetailsProp } from '../types';

 const CustomerDetails: React.FC<CustomerDetailsProp> = ({ images, selectedCustomer }) => {
  return (
    <div className='customer-details'>
      <CustomerDetailCard selectedCustomer={selectedCustomer} />
      <ImageGrid images={images} />
    </div>
  );
};


export default CustomerDetails