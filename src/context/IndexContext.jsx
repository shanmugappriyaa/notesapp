import React, { createContext, useState } from 'react'
export const CardIndexContext = React.createContext(null)

function IndexContext({children}) {
    let [contextCardIndex,setContextCardIndex]=useState(-1)
  return (
    <CardIndexContext.Provider value={{contextCardIndex, setContextCardIndex}}>{children}</CardIndexContext.Provider>
  )
}

export default IndexContext