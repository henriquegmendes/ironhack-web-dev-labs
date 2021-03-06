import React from 'react';
import './App.css';

import IdCard from './components/IdCard/IdCard';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName='John'
        lastName='Doe'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        firstName='Obrien'
        lastName='Delores '
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
