import { useEffect, useState } from "react"
import StarWarsCardList from "./StarwarsCardList"

const ConteinerStarWars = () => {

    const [chars, setChars] = useState([])
    useEffect(() => {
        const URL = 'https://rickandmortyapi.com/api/character'
        fetch(URL )
          .then(res => res.json() )
          .then( data => {
              console.log(data.results);
              setChars(data.results)
          })
      }, [])
    
    
    return (
    <>
        <div>STAR WARS</div>
        <StarWarsCardList chars={chars} />
    </>
  )
}
export default ConteinerStarWars