import React from 'react';

const Gif = (props) => {
  const { gifId, setSelectedGif } = props;
  const handleClick = () => {
    setSelectedGif(gifId);
  };
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  return (
    <img className="gif" src={url} alt="gif" onClick={handleClick} />
  );
};

export default Gif;
