// import './App.css';
import Header from './modules/Header';
import Cards from './modules/Cards';
import AgGrid from './modules/AgGrid';
import Footer from './modules/Footer';

function App() {
  return (
    <>
      <Header/>
      <main className='bg-gradient-to-t from-stone-700 to-stone-900'>
      <AgGrid/>
      <Cards/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
