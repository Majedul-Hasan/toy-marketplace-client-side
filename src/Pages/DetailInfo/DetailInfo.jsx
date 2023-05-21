import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';

const DetailInfo = () => {
  const deatail = useLoaderData();
  console.log(deatail);
  return (
    <PageWrapper
      pageTitle='Toy Detail'
      PageLink='Home/details'
      imgLink=''>
      <div></div>
    </PageWrapper>
  );
};

export default DetailInfo;
