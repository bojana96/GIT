import React, { createContext, useContext, useState, useEffect } from 'react'
const WindowDimensionsCtx = createContext(null)

const WindowDimensionProvider = ({ children }) => {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    useEffect(() => {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      return () => { window.removeEventListener('resize', handleResize) }
    }, [])
    return (
      <WindowDimensionsCtx.Provider value={dimensions}>
        {children}
      </WindowDimensionsCtx.Provider>
    )
  }
  export default WindowDimensionProvider;
  export const useWindowDimensions = () => useContext(WindowDimensionsCtx)