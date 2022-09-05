import StarWarsCard from "./StarWarsCard"

const StarWarsCardList = ({chars}) => {
  return (
    <div>   
    { chars.map( c => 
        <StarWarsCard key={c.id} id={c.id}name={c.name} species={c.species} image={c.image}/>
        )}    
    </div>
  )
}
export default StarWarsCardList