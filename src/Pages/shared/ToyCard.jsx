import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';

const ToyCard = ({ toy }) => {
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <img
        src={toy.picture}
        alt={toy?.name}
      />

      <div className='card-body'>
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
