import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "DELHI",
    },
    {
      id: 2,
      title: "COLOMBO",
    },
    {
      id: 3,
      title: "BEIJING",
    },
    {
      id: 4,
      title: "PARIS",
    },
    {
      id: 5,
      title: "WASHINGTON",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
