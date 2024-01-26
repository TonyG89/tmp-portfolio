import React from 'react';
import Card from '../components/Card';
import Error from '../components/Error';
import Loading from '../components/Loading';

const Portfolio = ({ clothes }) => {
  console.log(clothes);


  return !clothes.length ? (
    <Loading />
  ) : (
    <ul className="flex flex-wrap justify-between">
      {clothes.map((obj) => (
        <li className="h-[600px]" key={obj['id-portfolio']}>
          <Card
            name={obj.name}
            src={obj['id-portfolio']}
            desc={obj.description}
            tags={obj.tags}
          />
        </li>
      ))}
    </ul>
  );
  //   <Error />
};

export default Portfolio;
