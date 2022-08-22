import React, {useState} from 'react';
import './App.css';
import Table from './components/Table';
import TableBody from './components/TableBody';
import TableFooter from './components/TableFooter';
import TableHead from './components/TableHead';
import { MovieInfo } from './data/@types/MovieInfo';


function App() {
  let [myList, setMyList] = useState<MovieInfo[]> (
    [
      {
        id: 1,
        title: "O Telefone Preto",
        orgTitle: "The Black Phone",
        year: 2021,
        director: "Scott Derrickson",
        review: 3.5
      },
      {
        id: 2,
        title: "Invocação do Mal",
        orgTitle: "The Conjuring",
        year: 2013,
        director: "James Wan",
        review: 3.8
      },
    ]
)
console.log(typeof(myList));


  return (
    <div className="App">
      <Table>
        <TableHead/>
        <TableBody {...myList} />
        <TableFooter/>
      </Table>
    </div>
  );
}

export default App;
