import React from 'react';
import Gif from './Gif';

const Giflist = (props) => {
  const { gifIds, setSelectedGif } = props;
  return (
    <div className="gif-list">
      {gifIds.map((id) => <Gif gifId={id} key={id} setSelectedGif={setSelectedGif} />)}
    </div>
  );
};

export default Giflist;
