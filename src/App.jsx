import { useState } from 'react'
import Search from './components/search'
import data from './const/data'




function App() {

  const [ memes, setMemes ] = useState(data)
  conat [ search , setSearch] = useState("")

  function filterMemes(category){
    setSearch(category); // almacenando o guardando el valor de la busqueda del usuario
    setMemes( data.filter( d => d.category.toLowerCase().includes(category) ) )
  }

  return (
    <>
      <header>
        <Search onChange={ (e) => filterMemes(e.target.value) } />
      </header>
      <div className="images">
        { memes.map( (i, index) => (
          <div key={index} className='imagen-item' >
            <img src={i.image} alt=""  />
            <p>{'❤️'+ i.rating}</p>
            <h2>{ 'Cat: ' + i.category }</h2>
          </div>
        ) ) }
      </div>
    </>
  )
}

export default App
