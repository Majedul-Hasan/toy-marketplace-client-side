import { useEffect, useState } from 'react';
import ComponentWrapper from '../../Layout/ComponentWrapper';
import ToyCard from '../shared/ToyCard';

const NewArrival = (props) => {
  const [loadedData, setLoadedData] = useState([]);
  //   const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/toys-new`)
      .then((response) => response.json())
      .then((data) => {
        setLoadedData(data);
        // setLoading(false);
      });
  }, []);

  return (
    <ComponentWrapper classes=' my-5 py-5'>
      <div>
        <h1
          data-aos='fade-right'
          className='text-center text-3xl py-5 my-5 uppercase underline'>
          new product arrival
        </h1>
        <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 '>
          {loadedData?.map((toy, idx) => (
            <ToyCard
              idx={idx}
              key={toy._id}
              toy={toy}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NewArrival;
