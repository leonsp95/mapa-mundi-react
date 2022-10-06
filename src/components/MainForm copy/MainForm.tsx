import './MainForm.css';

const MainForm = ({
  handleSubmit,
  setCode
}: {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <form id='main-form' onSubmit={handleSubmit}>
      <input
        type='text'
        id='input-country'
        placeholder='Código do país'
        onChange={(e) => {
          setCode(e.target.value);
        }}
        required
      />
      <button>Pesquisar</button>
    </form>
  );
};

export default MainForm;
