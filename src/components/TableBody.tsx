import { MovieInfo } from '../data/@types/MovieInfo';

const TableBody = (myList: MovieInfo[]) => {
  return (
    <tbody>
      {
        myList.map(({id, title, orgTitle, year, director, review}) =>(
          <tr key={id}>
            <th>{title}</th>
            <th>{orgTitle}</th>
            <th>{year}</th>
            <th>{director}</th>
            <th>{review}</th>
            <th><button>Remover</button></th>
          </tr>
      ))
      }
    </tbody>
  )
}

export default TableBody