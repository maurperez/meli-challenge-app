import { createContext, useReducer, useEffect } from "react";

export const CacheContext = createContext()
CacheContext.displayName = 'Cache'

const cacheReducer = (state, action) => {
  const {type, payload} = action
  
  switch(type){
    case 'SET_CACHE': return {
      ...state,
      [payload.typeResource]: {
        ...state?.[payload.typeResource], [payload.key] : payload.value
      }
    }
    default : return {...state}
  }
}

export const CacheProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cacheReducer, JSON.parse(sessionStorage.getItem('CACHE')))

  useEffect(() => {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('CACHE', serializedState);
  }, [state]);

  return <CacheContext.Provider value={{ state, dispatch }}>{children}</CacheContext.Provider>;
}