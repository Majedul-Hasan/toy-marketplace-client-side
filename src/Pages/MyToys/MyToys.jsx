import { useEffect, useState } from 'react';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_API}/my-toys`;
  console.log(toys);

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
        <div></div>
      </PageWrapper>
    </>
  );
};

export default MyToys;
