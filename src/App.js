import React from 'react';
// import './App.css';
import Header from './modules/Header';
import Cards from './modules/Cards';
import AgGrid from './modules/AgGrid';
import Footer from './modules/Footer';
import Button from './components/Button';

import ToggleBtn from './components/ToggleBtn';

function App() {
  const [tableOn, setTableOn] = React.useState(false)
  const [count, setCount] = React.useState(0)
  // STYLES
  const divClass = "xl:w-4/5 mx-auto py-10 px-5 sm:text-center"


  return (
    <>
      <Header />
      <main className='bg-gradient-to-t from-stone-700 to-stone-900 text-white'>
        <ToggleBtn setTableOn={(value) => setTableOn(value)} />
        
        <section className={divClass}>
          <h2 className='text-white'>Наявність речей ({count+" шт."})</h2>
          {/* {tableOn ? <AgGrid /> : <Cards setCount={setCount}/>} */}
          <AgGrid />
        </section>
        
      </main>
      <Footer />
    </>
  );
}

export default App;
