import ComponentWrapper from '../../Layout/ComponentWrapper';
import logo from '../../assets/Logo.svg';

const Spinner = () => {
  console.log('object');
  return (
    <>
      <ComponentWrapper classes='my-10 flex-col'>
        <div className='flex items-center justify-center '>
          <div>
            <img
              className='w-24 h-24 text-red-600 animate-bounce'
              src={logo}
              alt=''
            />
          </div>
        </div>
        <p>loading ....</p>
        <progress className='progress w-56'></progress>
      </ComponentWrapper>
    </>
  );
};

export default Spinner;
