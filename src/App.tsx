import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Customer, ImageProp } from './types';
import customerData from './customerData';
import CustomerDetails from './components/CustomerDetails';
import CustomerList from './components/CustomerList';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [customers, setCustomers] = useState<Customer[]>(customerData);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [images, setImages] = useState<ImageProp[]>([]);

  const getImages = async () => {
    try {
      const response = await axios.get<ImageProp[]>('https://picsum.photos/v2/list?limit=9');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <main className='app'>
      <section className='app__wrapper'>
        <h1 className='app__title'>React Assignment</h1>
        <div className='app__content'>
          <CustomerList customers={customers} setSelectedCustomer={setSelectedCustomer} />
          <CustomerDetails images={images} selectedCustomer={selectedCustomer} />
        </div>
      </section>
    </main>
  );
}

export default App;
