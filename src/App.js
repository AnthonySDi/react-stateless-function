import React from 'react';
import './App.css';
import WeatherCard from './components/weathercard/WeatherCard';

function App() {
  return (
    <div className='App'>
      <WeatherCard temp={40} condition='Clear' city='Sydney' country='AU' />
      <WeatherCard temp={20} condition='Dusty' city='London' country='UK' />
      <WeatherCard
        temp={11}
        condition='Tornado'
        city='Des Moines'
        country='US'
      />
      <WeatherCard temp={-20} condition='Snow' city='Argentina' country='BA' />
    </div>
  );
}

export default App;
