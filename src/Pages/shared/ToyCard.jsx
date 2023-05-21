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
            emptySymbol={
              <AiOutlineStar />
              //   <img
              //     src='assets/images/star-empty.png'
              //     className='icon'
              //   />
            }
            fullSymbol={<AiFillStar />}
          />
        </p>
        <div className='card-actions justify-end'>
          <Link className='btn btn-primary'>View Details</Link>
        </div>
      </div>
    </div>
  );
};

ToyCard.propTypes = {
  toy: PropTypes.object,
};

export default ToyCard;
