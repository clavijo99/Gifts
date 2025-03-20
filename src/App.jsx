import { useState } from 'react'
import './App.css'
import Search from './components/search'
import ButtonCustom from './components/button'
import data from './const/data'




function App() {

  // definicion de estados
  const [ memes, setMemes ] = useState(data)
  const  [ search , setSearch] = useState("")

  function filterMemes(category){
    setSearch(category); // almacenando o guardando el valor de la busqueda del usuario
    setMemes( data.filter( d => d.category.toLowerCase().includes(category) ) )
  }

  function onClick(){
    alert("Busqueda del usuario: "+ search)
  }

  /*
  El componete ButtonCustom tiene una propiedad " props " showLabel, que me permite mostrar un h2 dentro del componente
        <ButtonCustom  textButton="Validar" label="hola" showLabel={false} />

  */

  return (
    <>
      <header>
        <Search onChange={ (e) => filterMemes(e.target.value) } />
      </header>
      <ButtonCustom  onClick={onClick} textButton="Validar" label="hola" showLabel={false} />
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