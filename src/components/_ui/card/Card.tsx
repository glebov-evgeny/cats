import './Card.scss';

const Card = (props:any) => {
  const item = props.item;
  const handlerGetId = props.handlerFunction;
  return (
    <div className='card' style={{"backgroundImage": `url("${item.url}")`}} onClick={() => handlerGetId(item)}></div>
  )
}

export default Card;