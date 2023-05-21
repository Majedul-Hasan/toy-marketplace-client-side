import React from 'react';

import ComponentWrapper from '../../Layout/ComponentWrapper';

const Trending = () => {
  return (
    <ComponentWrapper>
      <h1
        data-aos='fade-right'
        className='text-center text-3xl py-5 my-5 uppercase underline'>
        Trending
      </h1>
      {/* <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 '>
        {loadedData?.map((toy, idx) => (
          <ToyCard
            idx={idx}
            key={toy._id}
            toy={toy}
          />
        ))}
      </div> */}
    </ComponentWrapper>
  );
};

Trending.propTypes = {};

export default Trending;
