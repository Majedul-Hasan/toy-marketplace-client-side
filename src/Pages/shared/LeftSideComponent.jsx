import logo from '../../assets/Logo.svg';

const LeftSideComponent = () => {
  return (
    <div className='relative flex-1 hidden items-center justify-center h-screen  bg-[#8cfc7db3]  lg:flex'>
      <div className='relative z-10 w-full max-w-md'>
        <div className='w-1/2 mx-auto'>
          <img src={logo} />
        </div>

        <div className=' mt-16 space-y-3'>
          <h3 className='text-white text-3xl font-bold'>Shop easily</h3>
          <p className='text-sky-100'>
            Create an account and get access to all features for 30-days, No
            credit card required.
          </p>
          <div className='flex items-center -space-x-2 overflow-hidden'>
            {/* heard codded */}
            <img
              src='https://randomuser.me/api/portraits/women/79.jpg'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='https://randomuser.me/api/portraits/men/86.jpg'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <p className='text-sm text-sky-100 font-medium translate-x-5'>
              Join 5.000+ users
            </p>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-0 my-auto h-[500px]'
        style={{
          background:
            'linear-gradient(152.92deg, rgba(215, 188, 243, 0.2) 4.54%, rgba(148, 13, 168, 0.521) 34.2%, rgba(60, 121, 201, 0.1) 77.55%)',
          filter: 'blur(118px)',
        }}></div>
    </div>
  );
};

export default LeftSideComponent;
