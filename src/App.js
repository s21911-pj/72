import React, {useEffect, useState} from 'react';
import {useAppCtx} from './ctx';
import PhotoList from './photoList.js';
import './style.scss';
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";



function App() {
  let navigate = useNavigate();
  const {id} = useParams();
  let location = useLocation();
  const {
    photoList,
    deletePhoto,
    sortByTitle,
    sortByDate,
    shuffleList,
    likeIt,
    disLikeIt,
    rateIt,
  } = useAppCtx();

  return (
      <PhotoList
          photoList={photoList}
          deletePhoto={deletePhoto}
          sortByTitle={sortByTitle}
          sortByDate={sortByDate}
          shuffleList={shuffleList}
          onLikeIt={likeIt}
          onDisLikeIt={disLikeIt}
          onRate={rateIt}
          showDetails={showDetails}
      />
  );

  function showDetails(i) {
    let id = photoList[i].id;
    let path = "/details/" + id;
    navigate(path);
  }

}

export default App;
