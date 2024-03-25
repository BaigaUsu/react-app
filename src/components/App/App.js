import React, { useEffect, useState } from 'react';
import './App.css'
import { CatalogContent } from '../CatalogContent/CatalogContent';

const App = () => {
  const [galleryItems, setGalleryItems] = useState([
      {title: 'Hello'},
      {title: 'World'},
    ])
  useEffect(() => {
        fetch('https://demo5394722.mockable.io/cars')
            .then((res) => (res.json()))
            .then((data) => {setGalleryItems(data)});
    });

  return (
  <CatalogContent galleryItems={galleryItems}/>
)
};
export default App;