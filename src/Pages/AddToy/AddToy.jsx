import { useContext } from 'react';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBookService = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const available = form.available.value;
    const price = form.price.value;
    const category = form.category.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;

    const email = user?.email;
    const seller = user?.name || 'anonymous seller';

    const toy = {
      picture,
      name,
      price,
      rating: 0,
      description,
      seller,
      'seller-email': email,
      category,
      'sub-category': subCategory,
      available,
    };
    console.log(toy);

    fetch(`${import.meta.env.VITE_API}/toys`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('toy-zone-token')}`,
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // alert('service book successfully');
          Swal.fire('great!', 'New toy successfully added!', 'success');
          form.reset();
        }
      });
  };
  const emailNotFound = () => {
    Swal.fire(
      'email address not found!',
      'please update your email address',
      'warning'
    ).then(() => navigate('/update/profile'));
  };

  return (
    <>
      <Helmet>
        <title>Toys-zone | AddToy </title>
      </Helmet>
      {!user.email && emailNotFound()}
      <PageWrapper
        pageTitle='Add Toy'
        PageLink='Home/AddToy'
        imgLink='https://images.unsplash.com/photo-1504437484202-613bb51ce359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'>
        <div className='w-full'>
          <form onSubmit={handleBookService}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>picture</span>
                </label>
                <input
                  type='text'
                  name='picture'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>price</span>
                </label>
                <input
                  type='text'
                  name='price'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>available</span>
                </label>
                <input
                  type='text'
                  name='available'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>category</span>
                </label>
                <input
                  type='text'
                  name='category'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>sub-category</span>
                </label>
                <input
                  type='text'
                  name='subCategory'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control col-span-2'>
                <label className='label'>
                  <span className='label-text'>description</span>
                </label>
                <textarea
                  type='text'
                  name='description'
                  className='input input-bordered'
                />
              </div>
            </div>
            <div className='form-control mt-6'>
              <input
                className='btn btn-primary btn-block'
                type='submit'
                value='Upload new toy'
              />
            </div>
          </form>
        </div>
      </PageWrapper>
    </>
  );
};

export default AddToy;
