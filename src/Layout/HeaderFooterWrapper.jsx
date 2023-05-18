import BackdropFilter from 'react-backdrop-filter';
import PropTypes from 'prop-types';

const HeaderFooterWrapper = ({ children, bgPosition }) => {
  console.log(bgPosition);
  return (
    <div
      className='bg-base-200 text-base-content'
      style={{
        backgroundImage:
          'url(https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-full-blue-sky-white-clouds-small-tree-hillside-holiday-travel-background-image_60535.jpg)',
        backgroundPosition: `${bgPosition}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <BackdropFilter
        className='bluredForm'
        filter={'blur(8px) sepia(50%)'}
        canvasFallback={true}
        html2canvasOpts={{
          allowTaint: true,
        }}
        onDraw={() => {
          console.log('Rendered !');
        }}>
        {children}
      </BackdropFilter>
    </div>
  );
};
HeaderFooterWrapper.propTypes = {
  children: PropTypes.node,
  bgPosition: PropTypes.string,
};

export default HeaderFooterWrapper;
