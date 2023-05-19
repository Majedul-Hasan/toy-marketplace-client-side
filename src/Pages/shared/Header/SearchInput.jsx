const SearchInput = () => {
  return (
    <form className='w-full bg-green-200/70 mb-1 flex'>
      <input
        type='text'
        placeholder='search here'
        className='input w-full bg-transparent'
      />
      <button
        type='submit'
        className='px-4 bg-green-300'>
        search
      </button>
    </form>
  );
};

export default SearchInput;
