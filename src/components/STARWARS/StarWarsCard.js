const StarWarsCard = ( {name, specie, image} ) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{specie}</p>
    <div class="card-actions">
    </div>
  </div>
</div>
        {/* <h1>{id}-{name}</h1>
        <h3>{species}</h3>
        <img src={image}/> */}
    </div>
  )
}
export default StarWarsCard