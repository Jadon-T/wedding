import React from 'react';

const people = [
  { id: 1, name: 'Daniel', role: 'Groomsman', image: '/groomsman1.jpg' },
  { id: 2, name: 'Michael', role: 'Groomsman', image: '/groomsman2.jpg' },
  { id: 3, name: 'James', role: 'Groomsman', image: '/groomsman3.jpg' },
  { id: 4, name: 'Emily', role: 'Bridesmaid', image: '/bridesmaid1.jpg' },
  { id: 5, name: 'Sophia', role: 'Bridesmaid', image: '/bridesmaid2.jpg' },
  { id: 6, name: 'Lily', role: 'Bridesmaid', image: '/bridesmaid3.jpg' },
  // Add more people as needed
];

const Bestmen = () => {
  return (
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Our People</h3>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {people.map((person) => (
            <div key={person.id} className="flex-shrink-0 text-center w-32 transition-transform duration-300 hover:scale-105">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-rose-200">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">{person.name}</p>
              <p className="text-sm text-rose-500 font-medium">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Bestmen;