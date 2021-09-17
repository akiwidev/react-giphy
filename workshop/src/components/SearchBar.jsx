import React from 'react';

const SearchBar = (props) => {
  const { changeGifList } = props;
  const handleChange = (event) => {
    const keyword = event.currentTarget.value;
    changeGifList(keyword);
  };
  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
};

export default SearchBar;
