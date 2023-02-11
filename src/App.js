import React from 'react';
// import './App.css';
import Header from './modules/Header';
import StoragePrint from './pages/StoragePrint';
import PlantClothes from "./pages/PlantClothes";
import Footer from './modules/Footer';

import ToggleBtn from './components/ToggleBtn';

function App() {
  const [tableOn, setTableOn] = React.useState(false)


  return (
    <>
      <Header />
      <main className='bg-gradient-to-t from-stone-700 to-stone-900 text-white'>
        <ToggleBtn setTableOn={(value) => setTableOn(!value)} style={'bg-red-500'}>СМЕНЯЙСЯ!!</ToggleBtn>
        
        {tableOn ? <PlantClothes /> : <StoragePrint />}

        {/* <PlantClothes /> */}

      </main>
      <Footer />
    </>
  );
}

export default App;
