const TableHead = () => {
  return (
    <thead>
      <tr>
        <th colSpan={4}>Tabela de Livros</th>
      </tr>
      <tr>
        <th>Título</th>
        <th>Título original</th>
        <th>Ano</th>
        <th>Direção</th>
        <th>Nota</th>
        <th></th>
      </tr>

    </thead>
  )
}

export default TableHead