import './App.css';
import CustomerList from './components/CustomerList';
import { CustomerDetails } from './components/CustomerDetails';


function App() {
  return (
    <main className='app'>
      <section className='app__wrapper'>
        <h1 className='app__title'>React Assignment</h1>
        <div className='app__content'>
          <CustomerList />
          <CustomerDetails />
        </div>
      </section>
    </main>
  );
}

export default App;
