import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';
import LazyLoad from 'react-lazy-load';

const ToyCard = ({ toy }) => {
  // const imgw = '100%';
  // const imgH = '100%';
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
        <p>
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
          <span>{}</span>
        </p>
        <div className='card-actions justify-end'>
          <Link
            to={`/toys/${toy._id}`}
            className='btn bg-violet-400 border-0'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ToyCard.propTypes = {
  toy: PropTypes.object,
};

export default ToyCard;
