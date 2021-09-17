// rs + tab => React Functional Component
// rcc + tab => React Class Component

import React, { useState } from 'react';

import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const selectedGif = "VIPdgcooFJHtC";
  // const gifList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  const [ selectedGif, setSelectedGif] = useState("VIPdgcooFJHtC");
  const [ gifList, setGiftList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  const changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const arrayGifID = res.data.map((gif) => gif.id);
      setGiftList(arrayGifID);
      // this.setState({ giIdList: res.data.map(gif => gif.id) });
    });
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifList={changeGifList} />
        <div className="selected-gif">
          <Gif gifId={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
