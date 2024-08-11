import { CustomerDetailCardProp } from '../types';


const CustomerDetailCard: React.FC<CustomerDetailCardProp> = ({ selectedCustomer }) => {
  return (
    <div className='customer-details__content'>
      <h2 className='customer-details__name'>{selectedCustomer?.name}</h2>
      <div className='customer-details__description'>{selectedCustomer?.title}</div>
      <div className='customer-details__address'>
        <span className='customer-details__address-label'>Address:</span>
        {selectedCustomer?.address}
      </div>
    </div>
  );
};

export default CustomerDetailCard;
