import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './styles/homeStyles.css'

export const Home = ({category, subcategory}) => {
    // const { category, subcat } = useParams()
    const [data, setData] = useState([])
    
    console.log(category, subcategory)
    
    useEffect(() => {
        const getProductsOfACategory = (category, subcategory) => {
            axios.get('http://127.0.0.1:8000/api/product/?cat_name=' + category + '&sub_name=' + subcategory, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then((response) => {
                console.log(response.data)
                setData(response.data)
            }).catch((error) => {
                console.error(error)
            })
        }
        getProductsOfACategory(category, subcategory)
    }, [])

    // const {category} = props.match.params;

    return (
        <>
            <div className='BoxCard'>
                <h1>Produits {category}/{subcategory}</h1>
                {
                    data.map((dat) => (
                        <div className="card" key={dat.id}>
                            <img src={dat.Img} alt={dat.Titre} />
                            <div className="content">
                                <span className='nomProduit'>{dat.Titre}</span>
                                <span className='prixProduit'>{dat.Prix}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}