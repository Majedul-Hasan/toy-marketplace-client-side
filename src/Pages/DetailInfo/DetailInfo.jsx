import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';

const DetailInfo = () => {
  const deatail = useLoaderData();
  // console.log(deatail);
  const {
    picture,
    name,
    price,
    rating,
    description,

    available,
    seller,
  } = deatail;
  //'seller-email'
  return (
    <PageWrapper
      pageTitle='Toy Detail'
      PageLink='Home/details'
      imgLink={picture}>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex-auto col-span-2'>
            <h2 className='text-2xl font-bold my-3 text-center uppercase'>
              toy detail
            </h2>
            <div className='w-full p-4 my-8'>
              <img
                src={picture}
                alt={name}
              />
            </div>
            <div className='text-4xl font-bold my-3'>
              <h1>{name}</h1>
            </div>
            <div className='text-base  my-3'>
              <p>{description}</p>
            </div>
            <div className='text-base  my-3 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-9'></div>
          </div>

          <div className='w-full md:col-span-1'>
            {/* selar info */}
            <div className='w-full  bg-gray-200 p-6 rounded-xl'>
              <h2 className='text-2xl font-bold my-3 uppercase'>Seller info</h2>
              <h3 className='text-xl font-semibold my-3 capitalize'>
                {seller || 'anonymous seller'}
              </h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>
                {deatail['seller-email']}
              </h3>
            </div>
            <div className='w-full  bg-violet-100 text-gray-500 p-6 rounded-xl my-4'>
              <h2 className='text-2xl font-bold my-3 uppercase'> info</h2>
              <h3 className='text-xl font-semibold my-3 capitalize'>
                {' '}
                price : $ {price} usd
              </h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>
                {' '}
                rating : {rating} star ratings
              </h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>
                {' '}
                available quantity : {available}
              </h3>
              <button className='btn bg-violet-400 border-0'>
                add to favorite list
              </button>
            </div>
            <div className='w-full  bg-gray-100 text-gray-500 p-6 rounded-xl my-4'>
              <h2 className='text-2xl font-bold my-3 uppercase'>
                {' '}
                more toys from this seller
              </h2>
              <h3 className='text-xl font-semibold my-3 capitalize'>toy 1</h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>toy 2</h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>toy 3</h3>

              <button className='btn bg-purple-200 text-purple-400 border-0'>
                browse more from this seller
              </button>
            </div>

            <div className='w-full  bg-violet-100 text-violet-500 p-6 rounded-xl my-4'>
              <h2 className='text-2xl font-bold my-3 uppercase'>
                {' '}
                more toys from this category
              </h2>
              <h3 className='text-xl font-semibold my-3 capitalize'>Car 1</h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>Car 2</h3>
              <h3 className='text-xl font-semibold my-3 capitalize'>Car 3</h3>

              <button className='btn bg-violet-200 text-violet-400 border-0'>
                browse more from this seller
              </button>
            </div>

            <div className='card-actions justify-end'></div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DetailInfo;
