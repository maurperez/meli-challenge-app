import { useHistory } from 'react-router-dom'
import logoMl from '../assets/Logo_ML.png'
import searchIcon from '../assets/ic_Search.png'
import { useState } from 'react'

import '../styles/NavBar.scss'

export const NavBar = () => {
  const history = useHistory()
  const [input, setInput] = useState('')

  function handleFormSubmit (event) {
    event.preventDefault()
    history.push(`/items?search=${input}`)
  }

  return <div className='nav-container'>
    <img src={logoMl} alt="mercado-libre-logo"/>
    <form
      className='searchbar'
      onSubmit={handleFormSubmit}
      spellCheck={false}>
      <input placeholder='Nunca dejes de buscar' onChange={event => setInput(event.target.value)}/>
      <button type='submit' className='searchbar-btn'>
        <img src={searchIcon} alt='search-icon'/>
      </button>
    </form>

  </div>
}
