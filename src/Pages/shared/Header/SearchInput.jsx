const SearchInput = () => {
  return (
    <form className='w-full bg-violet-200/70 mb-1 flex'>
      <input
        type='text'
        placeholder='search here'
        className='input w-full bg-transparent'
      />
      <button
        type='submit'
        className='px-4 bg-violet-300 text-violet-800 font-bold '>
        search
      </button>
    </form>
  );
};

export default SearchInput;
