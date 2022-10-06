import React, { useState } from 'react';
import './App.css';
import { MainContainer } from './components';
import WorldMap from './components/WorldMap/WorldMap';
import { Country } from './data/@types/Country';
import api from './services/axios-api';
import getflag from './services/get-flag';

function App() {
  let [MainCont, setMainCont] = useState<boolean>(false);
  let [countryData, setData] = useState<Country>();
  let [countryFlag, setFlag] = useState<string>();

  const handleSubmit: CallableFunction = (countryCode: string) => {
    api
      .get(`${countryCode}`)
      .then((response) => {
        response.data !== '' ? setData(response.data) : console.log('Erro');
        console.log(response.data);
      })
      .then(() => {
        const flagLink: string = getflag(countryCode);
        setFlag(flagLink);
      })
      .then(() => {
        setMainCont((current) => (current = true));
      })
      .catch((err) => {
        console.error('Lista não encontrada! Erro: ' + err);
      });
  };

  return (
    <div className='App'>
      <WorldMap handleSubmit={handleSubmit} />
      <div className='MainContCont'>
        {MainCont && countryFlag && countryData && (
          <MainContainer
            countryData={countryData[0]}
            countryFlag={countryFlag}
            mainContEnabled={setMainCont}
          />
        )}
      </div>
    </div>
  );
}

export default App;
