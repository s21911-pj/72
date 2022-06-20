import React from 'react';
import { HandThumbsUpFill, HandThumbsDownFill } from 'react-bootstrap-icons';

export default function Likes({
                                  id,
                                  likes,
                                  dislikes,
                                  likeIt = (f) => f,
                                  dislikeIt = (f) => f,
                              }) {
    return (
        <div className="likesContainer">
            <button
                id={'btnLike#' + id}
                className="btn btn-success"
                onClick={() => likeIt(id)}
            >
                <HandThumbsUpFill />
                {likes}
            </button>
            <button
                id={'btnDislike#' + id}
                className="btn btn-danger"
                onClick={() => dislikeIt(id)}
            >
                <HandThumbsDownFill />
                {dislikes}
            </button>
        </div>
    );
}
