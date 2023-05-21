import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ToyCard from '../shared/ToyCard';

const Category = () => {
  const [activeTab, setActiveTab] = useState('electrical');
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState([]);
  const handleTab = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/toys-cate`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  function getUniqueCategories(arr) {
    const uniqueCategories = [];

    arr.forEach((item) => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });

    return uniqueCategories;
  }
  const uniqueCategories = getUniqueCategories(category);
  console.log({ uniqueCategories });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/toys-by-cat?cate=${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);
  return (
    <div className='container p-7 my-20'>
      <Tabs>
        <TabList className='flex text-white justify-center gap-8 mb-5 font-bold text-xl md:text-3xl'>
          <Tab
            className={
              activeTab === 'electrical'
                ? 'text-sky-500 bg-sky-100 px-3 py-1 border-0'
                : 'text-violet-400 bg-violet-100 px-3 py-1'
            }
            onClick={() => handleTab('electrical')}>
            electrical
          </Tab>
          <Tab
            className={
              activeTab === 'Helicopter'
                ? 'text-sky-500 bg-sky-100 px-3 py-1  border-0'
                : 'text-violet-400 bg-violet-100 px-3 py-1'
            }
            onClick={() => handleTab('Helicopter')}>
            Helicopter
          </Tab>
          <Tab
            className={
              activeTab === 'Push Car'
                ? 'text-sky-500 bg-sky-100 px-3 py-1  border-0'
                : 'text-violet-400 bg-violet-100 px-3 py-1'
            }
            onClick={() => handleTab('Push Car')}>
            Push Car
          </Tab>
        </TabList>

        <TabPanel>
          <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 '>
            {toys?.map((toy, idx) => (
              <ToyCard
                idx={idx}
                key={toy._id}
                toy={toy}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 '>
            {toys?.map((toy, idx) => (
              <ToyCard
                idx={idx}
                key={toy._id}
                toy={toy}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 '>
            {toys?.map((toy, idx) => (
              <ToyCard
                idx={idx}
                key={toy._id}
                toy={toy}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
