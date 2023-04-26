import './Card.scss';

const Card = (props:any) => {
  return (
    <div className='card' style={{"backgroundImage": `url("${props.item.url}")`}}></div>
  )
}

export default Card;