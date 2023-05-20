import { useEffect, useState } from 'react';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import TableRow from './TableRow';

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_API}/my-toys`;
  // console.log(toys);

  console.log();
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('toy-zone-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setToys(data);
        } else {
          // logout and then navigate
          navigate('/');
        }
      });
  }, [url, navigate]);

  return (
    <>
      <Helmet>
        <title>Toys-zone | MyToys </title>
      </Helmet>
      <PageWrapper
        pageTitle='MyToys'
        PageLink='Home/MyToys '>
        <div className=''>
          <table className='table table-zebra w-full break-words'>
            <caption className='bg-sky-100 py-2 text-2xl'>Ingredients</caption>

            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>picture </th>
                <th>Name </th>
                <th>category </th>
                <th>sub-category </th>
                <th>Price </th>
                <th>quantity available </th>
                <th>edit/delete </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys?.map((toy, i) => (
                <TableRow
                  key={toy._id}
                  toy={toy}
                  idx={i}
                  toys={toys}
                  setToys={setToys}
                />
              ))}
            </tbody>
          </table>
        </div>
      </PageWrapper>
    </>
  );
};

export default MyToys;
