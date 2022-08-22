import React from "react"

type TableProps = {
  children: React.ReactNode;
};

const Table = ({children}: TableProps) => {
  return (
    <table>
      {children}
    </table>
  )
}

export default Table