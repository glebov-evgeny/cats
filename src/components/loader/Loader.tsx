import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader__wrapper'>
      <div className='loader'>
      <div className='spinner'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <svg>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur' />
            <feColorMatrix in='blur' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -8' result='goo' />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
  )
}

export default Loader;