import { Outlet, useLoaderData } from 'react-router-dom';

function App() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <h1 className=' bg-gray-600 text-white font-bold'>data</h1>
      <Outlet />
    </>
  );
}

export default App;
