import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';
import LazyLoad from 'react-lazy-load';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const ToyCard = ({ toy }) => {
  // const imgw = '100%';
  // const imgH = '100%';
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const detailNavigationHandler = () => {
    if (!user?.uid) {
      Swal.fire('please login', 'to view detail information', 'warning');
    }
    navigate(`/toys/${toy._id}`);
  };
  return (
    <div className='card  bg-base-100 shadow-xl py-2'>
      <div className='mx-auto flex-auto h-2/3 '>
        <LazyLoad
          threshold={0.5}
          height={300}
          width={300}
          // height={imgH}
          // width={imgw}
        >
          <img
            className='h-full mx-auto'
            src={toy.picture}
            alt={toy?.name}
          />
        </LazyLoad>
      </div>

      <div className='flex flex-col p-4 justify-start items-center'>
        <h2 className='card-title text-base'>{toy?.name}</h2>
        <div className='flex justify-between gap-3 my-5 '>
          <Rating
            initialRating={toy.rating}
            emptySymbol={
              <span className='text-violet-500'>
                <AiOutlineStar />
              </span>
              //   <img
              //     src='assets/images/star-empty.png'
              //     className='icon'
              //   />
            }
            fullSymbol={
              <span className='text-violet-500'>
                <AiFillStar />
              </span>
            }
          />
          <span> price:$ {toy.price}</span>
        </div>
        <div className='card-actions justify-end'>
          <button
            onClick={detailNavigationHandler}
            className='btn bg-violet-400 border-0'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ToyCard.propTypes = {
  toy: PropTypes.object,
};

export default ToyCard;
