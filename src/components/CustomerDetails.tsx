import ImageGrid from './ImageGrid';


export const CustomerDetails = () => {
  return (
    <div className='customer-details'>
      <div className='customer-details__content'>
        <h2 className='customer-details__name'>Customer 1</h2>
        <div className='customer-details__description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum cupiditate aperiam similique corrupti libero
          molestiae commodi laboriosam nulla dolore deleniti. Natus itaque cum cupiditate dolore aperiam quam animi,
          incidunt ut?
        </div>
        <div className='customer-details__address'>
          <span className='customer-details__address-label'>Address:</span>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Vel ex quam excepturi.
        </div>
      </div>
     <ImageGrid/>
    </div>
  );
};

