import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./Reviews.module.css";

const Reviews = () => {
    console.log("https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews");

    return (
        <div className={classes.Reviews}>
            <Fade>
                <h1>Why Choose Us For Your Next Home Inspection?</h1>
                <h4>See what our clients have to say about our Certified Home Inspectors</h4>
                <a href="https://www.google.com/search?source=hp&ei=TqW5X4-YJY-q5wL9iZ3oAQ&q=c+thru+inspections&oq=c+thru+inspections&gs_lcp=CgZwc3ktYWIQAzIOCC4QxwEQrwEQyQMQkwIyAggmOg4IABDqAhC0AhCaARDlAjoFCAAQsQM6CAgAELEDEIMBOg4ILhCxAxCDARDHARCjAjoLCC4QsQMQxwEQowI6CAgAELEDEMkDOgIIADoFCC4QsQM6AgguOgsILhCxAxDJAxCTAjoICC4QxwEQrwE6BggAEBYQHjoICAAQFhAKEB5Ql0BY2UpgkUtoAXAAeACAAb4BiAG0D5IBAzcuOZgBAKABAaoBB2d3cy13aXqwAQY&sclient=psy-ab&ved=0ahUKEwiP94rV55TtAhUP1VkKHf1EBx0Q4dUDCAk&uact=5#lrd=0x88dd8397c64ade61:0x2d4c2f1399a504a6,1,,," target="_blank" rel="noopener noreferrer">See Our Reviews</a>
            </Fade>
        </div>
    );
}

export default Reviews;