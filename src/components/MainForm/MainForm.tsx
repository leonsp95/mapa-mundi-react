import './MainForm.css';
import apiCountries from '../../services/countries-api';
import { useState, useEffect } from 'react';
import { CountryOption } from '../../data/@types/CountryOption';

const MainForm = ({
  handleSubmit,
  setCode
}: {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  let [listData, setListData] = useState<CountryOption[]>([]);

  useEffect(() => {
    apiCountries
      .get('')
      .then((response) => {
        setListData(response.data);
      })
      .catch((err) => {
        console.error('Lista não encontrada. ' + err);
      });
  }, []);

  return (
    <div>
      <form id='main-form' onSubmit={handleSubmit}>
        <select
          className='chosen-select'
          defaultValue={0}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        >
          <option value={0}>Escolha um país</option>

          {listData &&
            listData.map((option: CountryOption) => {
              return (
                <option key={option.abbreviation} value={option.abbreviation}>
                  {option.name}
                </option>
              );
            })}
        </select>
        <button>Pesquisar</button>
      </form>
    </div>
  );
};

export default MainForm;
