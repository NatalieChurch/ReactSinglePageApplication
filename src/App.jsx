import { useState, useEffect } from 'react'
import CatList from './CatList';
import SelectCat from './SelectedCat';
import './App.css'

function App() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  console.log(selectedCat)

  useEffect(()=>{
    const getCats = async () => {
      const res = await fetch("https://catfact.ninja/breeds")
      const data = await res.json()
      console.log(data)
      setCats(data.data)
    }
    getCats();
  }, [])

  useEffect(()=>{
    console.log("second useEffect")
  }, [selectedCat])

  return (
    <>
      <div>
        <h1>All About Cat Breeds!</h1>
        {
      selectedCat ? <SelectCat selectedCat={selectedCat} setSelectedCat={setSelectedCat}/> : <CatList cats={cats} setCats={setCats} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
     }
      </div>
    </>
  )
}

export default App
