import ComponentWrapper from '../../Layout/ComponentWrapper';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | about us </title>
      </Helmet>
      <PageWrapper
        pageTitle='About Us'
        PageLink='Home/about'>
        {/* <ComponentWrapper classes='flex-col '> */}
        <div className='flex-col '>
          <h2 className='text-xl font-semibold  flex justify-center '>
            Story & Mission
          </h2>
          <div className='flex gap-8 items-center py-8 my-8'>
            <div className='flex-1'>
              <img
                src='https://images.unsplash.com/photo-1517649187581-ad0f359f0092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                alt=''
              />
            </div>
            <div className='flex-1'>
              <p>
                We believe that childhood is a celebration, and the colorful
                prints and cute characters we design are inspired by the joy and
                love children bring into our lives. We celebrate childhood by
                supporting babies, children, and families with thoughtful
                designs, quality materials and construction, and convenient
                shopping options.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center py-8 my-8 bg-blue-600/25 w-full p-8'>
            <div className='card  bg-slate-100 text-gray-500 hover:animate-bounce'>
              <div className='card-body'>
                <h2 className='card-title block text-center'>Best Quality</h2>
                <p className='text-justify'>
                  From our in-house Design and Creative studios to our monthly
                  birthday cupcake breaks. We love to build moments.
                </p>
              </div>
            </div>
            <div className='card  bg-slate-100 text-gray-500 hover:animate-bounce'>
              <div className='card-body'>
                <h2 className='card-title block text-center'>
                  Awesome Products
                </h2>
                <p className='text-justify'>
                  From our in-house Design and Creative studios to our monthly
                  birthday cupcake breaks. We love to build moments.
                </p>
              </div>
            </div>
            <div className='card  bg-slate-100 text-gray-500 hover:animate-bounce'>
              <div className='card-body'>
                <h2 className='card-title block text-center'>Cute Models</h2>
                <p className='text-justify'>
                  From our in-house Design and Creative studios to our monthly
                  birthday cupcake breaks. We love to build moments.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-8 pt-8'>
            <div className='flex gap-8 items-center py-8 my-8'>
              <div className='flex-1'>
                <h2 className='text-xl font-semibold mb-8  flex justify-center '>
                  Our Philosophy
                </h2>
                <p>
                  We believe that childhood is a celebration, and the colorful
                  prints and cute characters we design are inspired by the joy
                  and love children bring into our lives. We celebrate childhood
                  by supporting children and families with thoughtful designs,
                  quality materials and convenient shopping options. We continue
                  this heritage in every little detail to make dressing easier
                  for mom and life more comfortable for babies, and as we move
                  into the future, we are proud to help families like yours with
                  innovative products.
                </p>
              </div>
              <div className='flex-1'>
                <img
                  src='https://images.unsplash.com/photo-1526369120040-e88e9e510796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default About;
