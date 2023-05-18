import { Link } from 'react-router-dom';
import './style404.css';

function Error404() {
  return (
    <div>
      <div className='bg-purple-600  h-[100vh] overflow-hidden'>
        <div className='stars h-full'>
          <div className='h-full mx-auto flex flex-col justify-center items-center'>
            <img
              className='image-404'
              src='http://salehriaz.com/404Page/img/404.svg'
              width='300px'
            />
            <Link
              to='/'
              className='btn-go-home'>
              GO BACK HOME
            </Link>
          </div>
          <div className='objects '>
            <img
              className='object_rocket'
              src='http://salehriaz.com/404Page/img/rocket.svg'
              width='40px'
            />
            <div className='earth-moon  spin-earth'>
              <img
                className='object_earth spin-earth-on-hover '
                src='http://salehriaz.com/404Page/img/earth.svg'
                width='100px'
              />
              <img
                className='object_moon spin-earth-on-hover'
                src='http://salehriaz.com/404Page/img/moon.svg'
                width='80px'
              />
            </div>
            <div className='box_astronaut'>
              <img
                className='object_astronaut'
                src='http://salehriaz.com/404Page/img/astronaut.svg'
                width='140px'
              />
            </div>
          </div>
          <div className='glowing_stars'>
            <div className='star' />
            <div className='star' />
            <div className='star' />
            <div className='star' />
            <div className='star' />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Error404;
