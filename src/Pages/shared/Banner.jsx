import banner from '../../assets/travel-background.png';
import ComponentWrapper from '../../Layout/ComponentWrapper';
import PropTypes from 'prop-types';

const Banner = ({ pageTitle, PageLink, imgLink }) => {
  const photo = imgLink || banner;
  return (
    <ComponentWrapper classes='mt-0'>
      <div className='carousel w-full h-[550px] my-8'>
        <div className='carousel-item relative w-full'>
          <img
            src={photo}
            className='w-full rounded-xl ml-auto mr-0'
          />
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#8176bd92] to-[#57c4c45e] w-full'>
            <div className='text-white space-y-7 ml-24'>
              <h2 className='text-5xl font-bold'>{pageTitle}</h2>
            </div>
          </div>
          <div className='absolute left-[50%] bottom-0 '>
            <div
              className='bg-[#ff0443] relative text-white px-9 py-2  left-[-50%] ml-auto  '
              style={{
                clipPath: 'polygon(15% 0%,86% 0%,100% 100%, 0% 100%)',
              }}>
              <p>{PageLink}</p>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

Banner.propTypes = {
  pageTitle: PropTypes.string,
  PageLink: PropTypes.string,
  imgLink: PropTypes.string,
};

export default Banner;
