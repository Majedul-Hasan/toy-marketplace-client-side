import PropTypes from 'prop-types';

const ComponentWrapper = ({ children, ...props }) => {
  return (
    <div
      className={`w-full md:w-11/12 lg:w-9/12 px-3 flex justify-center items-center mx-auto ${props?.classes}`}>
      {children}
    </div>
  );
};

ComponentWrapper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default ComponentWrapper;
