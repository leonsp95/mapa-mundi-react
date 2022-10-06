import './MainContainer.css';
import { Country } from '../../data/@types/Country';

const MainContainer = ({
  countryFlag,
  countryData,
  mainContEnabled
}: {
  countryFlag: string;
  countryData: Country[0];
  mainContEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className='modal'>
      <div className='card-container'>
        <div
          className='closeBtn'
          onClick={() => {
            mainContEnabled(false);
          }}
        >
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div className='country-card'>
          <h1 id='country-name'>{countryData.nome.abreviado}</h1>
          <img src={countryFlag} alt='' id='img-flag' />
          <p>
            Capital: <span>{countryData.governo.capital.nome}</span>
          </p>
          <p>
            Localização: <span>{countryData.localizacao.regiao.nome}</span>
          </p>
          <p>
            Área:{' '}
            <span>
              {Number(countryData.area.total.split(',')[0]).toLocaleString(
                'pt-BR'
              )}{' '}
              km²
            </span>
          </p>
          <p>
            Idioma: <span>{countryData.linguas[0].nome}</span>
          </p>

          <div className='container-historico'>{countryData.historico}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
