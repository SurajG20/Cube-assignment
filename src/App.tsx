import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Customer, ImageProp } from './types';
import customerData from './customerData';
import CustomerDetails from './components/CustomerDetails';
import CustomerList from './components/CustomerList';

const YOUR_PEXELS_API_KEY = ' NNlc1mnJ375DAmv0HGR26VK9yPdOicD1qBjvFPrTRAVcSRfjcwYGK89y';

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [images, setImages] = useState<ImageProp[]>([]);

  const getImages = async () => {
    try {
      const response = await axios.get<{ photos: ImageProp[] }>('https://api.pexels.com/v1/curated', {
        headers: {
          Authorization: YOUR_PEXELS_API_KEY
        },
        params: {
          per_page: 9
        }
      });

      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    if (selectedCustomer) {
      getImages();
    }
    const interval = setInterval(() => {
      getImages();
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedCustomer]);

  return (
    <main className='app'>
      <section className='app__wrapper'>
        <h1 className='app__title'>React Assignment</h1>
        <div className='app__content'>
          <CustomerList customers={customerData} setSelectedCustomer={setSelectedCustomer} />
          <CustomerDetails images={images} selectedCustomer={selectedCustomer} />
        </div>
      </section>
    </main>
  );
}

export default App;
