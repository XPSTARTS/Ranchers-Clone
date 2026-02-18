import React from 'react';
import HomeCards from './HomeCards';
import foodData from "./foodData";

const DealsCards = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mt-2">Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {foodData.deals.map((item) => (
          <HomeCards
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsCards;