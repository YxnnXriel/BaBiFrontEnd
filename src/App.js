import './App.css';
import Navbar from './component/navbar/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Home } from './component/home/home';
import { getCategories } from './datas/data'


function App() {
  const [categories, setCategories] = useState([])



  const PageTest = () => {
    const { subcat } = useParams()

    return (
      <div>
        <p>AZERT {subcat}</p>
      </div>
    )
  }

  useEffect(() => {
    const getCategories = async () => {
      await axios.get('http://127.0.0.1:8000/api/categorie/', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }).then((response) => {
        console.log(response.data)
        setCategories(response.data)
      }).catch((error) => {
        console.error(error)
      })
    }
    getCategories()


    // document.addEventListener('mousedown', handleOutsideClick)
    // document.addEventListener('scroll', handleOutsideClick)

    // return () => {
    //     document.removeEventListener('mousedown', handleOutsideClick)
    //     document.removeEventListener('scroll', handleOutsideClick)

    // }
  }, [])

  return (
    <BrowserRouter>
      <Navbar categories={categories} />
      <Routes>
        <Route path='/' Component={PageTest} />
        {
          categories.map(categorie => {
            categorie.subcategories.map(subcategory => (
              <Route 
                path={'/'+categorie.Nom +'/' +subcategory.Nom}
                Component={<Home categorie={categorie} subcategorie={subcategory} />}
                
              />
            ))
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
