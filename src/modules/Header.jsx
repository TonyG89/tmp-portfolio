import React from 'react';
import Logo from '../components/Logo';
import Contacts from '../components/Contacts';

const Header = ({ nameIndex }) => {
  const headerArr = {
    title: ['Too Much Plant Clothes', 'Storage Too Much Print'],
    desc: [
      'Речі що є зараз у наявності! За приємними цінами для вас👍',
      'Архів з найкращими нашими роботами',
    ],
  };
  const { title, desc } = headerArr;

  const changeText = (typeText) => (nameIndex ? typeText[0] : typeText[1]);
  function changeColor(color1 = 'teal', color2 = 'red') {
    return nameIndex ? color1 : color2;
  }

  const Hr = () => (
    <hr
      className="mx-auto 
    md:w-3/5 
    border-dotted
    border-stone-400 border-t-4"
    />
  );

  const TEXT_GRADIENT = 'text-transparent bg-clip-text';

  const bgHeaderClass = `bg-${changeColor()}-500 bg-opacity-50`;
  const h1Class = `text-stone-600 font-title bg-gradient-to-b from-stone-400 to-stone-900 drop-shadow-lg ${TEXT_GRADIENT}`;
  const h2Class = `text-${changeColor()}-900 text-[40px] text-stone-600 font-title bg-gradient-to-b from-stone-600 to-stone-900 drop-shadow-lg ${TEXT_GRADIENT}`;
  const pClass =
    'text-amber-50 hover:text-amber-300 mt-5 py-1 px-2 w-fit mx-auto rounded-md md:text-md text-base bg-gradient-to-b from-stone-600 to-stone-900';

  return (
    <header className={bgHeaderClass}>
      <div
        className="
      flex-col flex justify-around items-center py-5
      md:flex-row"
      >
        <Logo />
        <hgroup className={' text-center mb-8'}>
          <h1 hidden className={h1Class}>
            Too Much Print
          </h1>
          <h2 className={h2Class}> {changeText(title)}</h2>
          <p className={pClass}>{changeText(desc)}</p>
        </hgroup>
        <Contacts />
      </div>
    </header>
  );
};

export default Header;
