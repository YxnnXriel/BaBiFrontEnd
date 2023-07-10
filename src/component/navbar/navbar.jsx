import React, { useState,  useEffect } from 'react';
import './styles/navbarStyles.css';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Navbar = ({categories}) => {
    const [activeCategory, setActivecategory] = useState('')
    // const menRef = useRef(null)
    // const womenRef = useRef(null)

    const handleClick = (categoryName) => {
        setActivecategory(activeCategory === categoryName ? "" : categoryName);
    }

    const handleOutsideClick = (e) => {
        // if (
        //     menRef.current && !menRef.current.contains(e.target) &&
        //     womenRef.current && !womenRef.current.contains(e.target)
        // ) {
        //     setActivecategory('')
        // }
    }

    
    

    return (
        <>
            <div className='sale' style={{ background: '#000', paddingTop: 10, paddingBottom: 10 }}>
                <p style={{ textAlign: "center", color: "#fff" }}>SALE - UP TO 50% OFF</p>
            </div>
            <nav className='NavContainer'>
                <div className="left">
                    <span className="logo">BALR.</span>
                    <ul className="nav-links">
                        {categories.map((category) => {
                            if (category.subcategories.length > 0) {
                                return (
                                    <li className="link" key={category.id}>
                                        <a href="#" onClick={() => handleClick(category.Nom)}>
                                            {category.Nom} {category.subcategories.length > 0 && '+'}
                                        </a>
                                        {activeCategory === category.Nom && (
                                            <ul className="sub-links">
                                                {category.subcategories.map((subcategory) => (
                                                    <li className="sub-link" key={subcategory.id}>
                                                        <Link to={'/'+category.Nom+'/'+subcategory.Nom}>{subcategory.Nom}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="link" key={category.id}>
                                        <a href="#">{category.Nom}</a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className="right"></div>
            </nav>
        </>
    );
};

export default Navbar;