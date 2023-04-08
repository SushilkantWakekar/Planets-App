import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet">
      <img className="planetImage" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planetName">{name}</h1>
      <p className="planetDescription">{description}</p>
    </div>
  )
}

export default PlanetItem
