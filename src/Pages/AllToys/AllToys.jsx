import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import ToyCard from '../shared/ToyCard';
import { useEffect, useState } from 'react';
import Spinner from '../../components/spinner/Spinner';

const AllToys = () => {
  const { totalNumberOfToys } = useLoaderData();
  const [isLoading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);
  // const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(0);
 
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalNumberOfToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  console.log({ totalNumberOfToys, totalPages, pageNumbers });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/toys?page=${page}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Toys-zone | All toys </title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <PageWrapper
          pageTitle='All toys'
          PageLink='Home/all-toys'
          imgLink='https://images.unsplash.com/photo-1512308439392-3c1bec71099e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 '>
              {toys?.map((toy) => (
                <ToyCard
                  key={toy._id}
                  toy={toy}
                />
              ))}
            </div>
            {/* pagination */}
            <div className='pagination my-5'>
              <div className='btn-group'>
                {pageNumbers.map((number) => (
                  <button
                    onClick={() => setPage(number)}
                    key={number}
                    className={`btn btn-sm ${
                      page === number ? 'bg-violet-400' : ''
                    }`}>
                    {number + 1}
                  </button>
                ))}
              </div>
              {/* <select
                value={itemsPerPage}
                onChange={handleSelectPageChange}>
                {options.map((option) => (
                  <option
                    key={option}
                    value={option}>
                    {option}
                  </option>
                ))}
              </select> */}
            </div>
          </div>
        </PageWrapper>
      )}
    </>
  );
};

export default AllToys;
