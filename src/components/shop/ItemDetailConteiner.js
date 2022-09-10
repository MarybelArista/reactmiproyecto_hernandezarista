import { useState } from 'react'
import ItemDetail from './ItemDetail'

const product = { 
  name: 'iphone',
  price: '1200'
}

const ItemDetailConteiner = () => {
  
  const [item,setItem]= useState({})

  useEffect(() => {
    getItem().then( data => {
      console.log(data);
      setItem(data)
    })
  }, [])
  

  const getItem = () => {
     return new Promise( resolve => {
      setTimeout( () => {
        resolve( product )
      }, 2000);
      })
  }
  
  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailConteiner