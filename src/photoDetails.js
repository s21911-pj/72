import React from 'react';
import './style.scss';
import {
    HandThumbsUpFill,
    HandThumbsDownFill,
    Trash3,
} from 'react-bootstrap-icons';
import Likes from './likes.js';
import ReactStars from 'react-rating-stars-component';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useAppCtx} from "./ctx";

export default function PhotoDetails() {
    const {
        photoList,
        deletePhoto,
        likeIt,
        disLikeIt,
        rateIt,
    } = useAppCtx();

    let navigate = useNavigate();
    const {ident} = useParams();

    var index;
    const photoToDisplay = photoList.find((photo, i) => {
        if (photo.id === parseInt(ident)) {
            index = i;
            console.log(photo)
            return photo;
        }
    });


    if (photoToDisplay === undefined){
        return (<Navigate to="/"/>);
    }

    const next = () => {
        let nextItem;
        photoList.length - 1 === index ? nextItem = 0 : nextItem = index + 1;
        let id = photoList[nextItem].id;
        let path = "/details/" + id;
        navigate(path);
    }

    const previous = () => {
        let prevItem;
        console.log(index);
        0 === index ? prevItem = photoList.length - 1 : prevItem = index - 1;
        let id = photoList[prevItem].id;
        let path = "/details/" + id;
        navigate(path);
    }

    return (
        <li>
            <section>
                <h1>{photoToDisplay.title}</h1>
                <img src={photoToDisplay.image}/>
                <div>
                    Average grade: {averageAndRound(photoToDisplay.ratings)} [Votes number:{' '}
                    {photoToDisplay.ratings.length}]
                    <ReactStars
                        count={5}
                        value={averageAndRound(photoToDisplay.ratings)}
                        onChange={(rate) => rateIt(photoToDisplay.id, rate)}
                        size={25}
                    />
                </div>
                <Likes
                    key={photoToDisplay.title}
                    id={photoToDisplay.id}
                    likes={photoToDisplay.likes}
                    dislikes={photoToDisplay.dislikes}
                    likeIt={likeIt}
                    dislikeIt={disLikeIt}
                />
                <div>Date added: {photoToDisplay.date}</div>
                <button
                    className="rm btn btn-warning"
                    onClick={() => deletePhoto(photoToDisplay.id)}
                >
                    <Trash3/>
                    Delete
                    <Trash3/>
                </button>
                <button className="btn btn-success" onClick={() => next(index)}>Next</button>
                <button className="btn btn-success" onClick={() => previous(index)}>Previous</button>
            </section>
        </li>
    );

    function averageAndRound(arr) {
        var av = Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 2) / 2;
        return Number.isNaN(av) ? 'No rating. You are the first!' : av;
    }



}
