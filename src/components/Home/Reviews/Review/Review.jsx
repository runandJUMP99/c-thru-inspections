import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./Review.module.css";

const Review = (props) => {
    return (
        <Fade>
            <div className={classes.Review}>
                <p className={classes.Comment}><i className="fas fa-quote-left"></i>{props.comment}</p>
                <div className={classes.Stars}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <p className={classes.Name}>-{props.name}</p>
            </div>
        </Fade>
    );
}

export default Review;