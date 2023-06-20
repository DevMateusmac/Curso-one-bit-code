import propTypes from "prop-types"

Game.propTypes = {
  title: propTypes.string,
  cover: propTypes.string,
  onRemove: propTypes.func
}

export default function Game({title, cover, onRemove}){
  return (
    <div>
      <img src={cover} alt="" />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  )
}
