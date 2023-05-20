import PropTypes from 'prop-types';
import { AiFillEdit, AiFillDelete } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRow = ({ toy, idx, toys, setToys }) => {
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'want to delete??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#e43838',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API}/toys/${toy._id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('toy-zone-token')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // alert('deleted successful');
              // Swal.fire('deleted successful', 'success');
              Swal.fire(
                'Deleted!',
                `the toy ${toy.name} was successfully deleted`,
                'success'
              );
              const remaining = toys.filter((ttto) => ttto._id !== toy._id);
              setToys(remaining);
            }
          });
      }
    });
    // console.log(toy._id);
  };

  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>
          <img
            src={toy.picture}
            alt=''
          />
        </td>
        <td className='max-w-lg break-words overflow-hidden '>{toy?.name} </td>
        <td>{toy.category}</td>
        <td>{toy['sub-category']} </td>
        <td>{toy.price} </td>
        <td>{toy.available}</td>
        <td className=''>
          <button className='text-blue-500'>
            <Link to={`/my-toys/update/${toy._id}`}>
              <AiFillEdit />
            </Link>
          </button>
          <div className='w-[1px] h-full bg-black inline mx-1'>|</div>
          <button
            className='text-red-500'
            onClick={handleDelete}>
            <AiFillDelete></AiFillDelete>
          </button>
        </td>
      </tr>
    </>
  );
};

TableRow.propTypes = {
  toy: PropTypes.object,
  idx: PropTypes.number,
  toys: PropTypes.array,
  setToys: PropTypes.func,
};

export default TableRow;
