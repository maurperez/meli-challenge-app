import { CacheContext } from '../contexts/cacheContext'
import { useReducer, useEffect, useContext} from 'react'

const initialState = { loading: false, data: null, error: null };

const fetchReducer = (state, action) => {
  const { type, payload } = action
  switch(type){
    case 'LOAD' : 
      return {...state, loading: true, data: null, error: null}
    case 'SUCCESS' : 
      return {...state, loading : false, data : payload, error : null}
    case 'FAILURE' : 
      return {...state, loading : false, data : null, error : payload}
    default : 
      return state
  }
}

export const useFetchReducer = (fetch) => {
  const cache = useContext(CacheContext)
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type : 'LOAD'})
      try{
        const resource = await fetch.resource(...fetch.parameters)
        console.log(resource);
        dispatch({type : 'SUCCESS', payload : resource})
        cache.dispatch({type : 'SET_CACHE', payload : {key : fetch.cacheIndentifier, value : resource, typeResource: fetch.typeResource}}) 
      }catch(error){
        dispatch({type : 'FAILURE', payload : error.message})
      }
    }

    const responseInCache = cache.state?.[fetch.typeResource]?.[fetch.cacheIndentifier]
    if(responseInCache){
      dispatch({type: 'SUCCESS', payload: responseInCache})
    }else{ fetchData() }
  }, [cache, fetch])

  return state
}