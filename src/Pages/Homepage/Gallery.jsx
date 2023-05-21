import { useEffect, useState } from 'react';
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
import Spinner from '../../components/spinner/Spinner';

const GalleryComponent = () => {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/toys-pic`)
      .then((response) => response.json())
      .then((data) => {
        setPhotoGallery(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? <Spinner /> : null}
      <Gallery>
        <h1 className='text-center text-3xl py-5 my-5 uppercase underline'>
          see some of our model products{' '}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {photoGallery.map((p) => (
            <Item
              key={p._id}
              original={p.picture}
              thumbnail={p.picture}
              width='1024'
              height='768'>
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={p.picture}
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </>
  );
};

Gallery.propTypes = {};

export default GalleryComponent;
