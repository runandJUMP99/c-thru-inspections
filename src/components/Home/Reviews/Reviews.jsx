import React from "react";

import Fade from "react-reveal/Fade";
import Review from "./Review/Review";

import classes from "./Reviews.module.css";

const Reviews = (props) => {
    return (
        <div className={classes.Reviews}>
            <Fade>
                <h1>
                    {props.language ? 
                    "¿Por Qué Elegirnos Para La Próxima Inspección de Su Casa?" :
                    "Why Choose Us For Your Next Home Inspection?"}
                </h1>
                <h4>
                    {props.language ? 
                    "Vea lo que nuestros clientes tienen que decir sobre nuestros inspectores de viviendas certificados" :
                    "See what our clients have to say about our Certified Home Inspectors"}
                </h4>
                <div className={classes.ReviewsGroup}>
                    <Review 
                        comment="Got a wind mitigation done by Holiver on a house we were looking to purchase. He was very professional and was great to work with! He found crucial information that helped save us thousands in disasters down the line!! I can't thank him enough!! I would 100% recommend!" 
                        name="Rbyleona" 
                    />
                    <Review 
                        comment="The provided a 4 point inspection and a wind mitigation inspection on a home I am purchasing for insurance purposes. The inspector was very knowledgeable and friendly. The inspection was conducted at the scheduled time and completed in a timely manner. The cost was quite reasonable compared to others I looked up online.
                        I would highly recommend them." 
                        name="Brian Dornbush" 
                    />
                    <Review 
                        comment="I needed a 4 point inspection plus a wind mitigation for insurance purposes and I got exactly what I asked for. Thorough, knowledgeable and professional. I would call on them again." 
                        name="Thomas Downey" 
                    />
                </div>
                <a href="https://www.google.com/search?source=hp&ei=TqW5X4-YJY-q5wL9iZ3oAQ&q=c+thru+inspections&oq=c+thru+inspections&gs_lcp=CgZwc3ktYWIQAzIOCC4QxwEQrwEQyQMQkwIyAggmOg4IABDqAhC0AhCaARDlAjoFCAAQsQM6CAgAELEDEIMBOg4ILhCxAxCDARDHARCjAjoLCC4QsQMQxwEQowI6CAgAELEDEMkDOgIIADoFCC4QsQM6AgguOgsILhCxAxDJAxCTAjoICC4QxwEQrwE6BggAEBYQHjoICAAQFhAKEB5Ql0BY2UpgkUtoAXAAeACAAb4BiAG0D5IBAzcuOZgBAKABAaoBB2d3cy13aXqwAQY&sclient=psy-ab&ved=0ahUKEwiP94rV55TtAhUP1VkKHf1EBx0Q4dUDCAk&uact=5#lrd=0x88dd8397c64ade61:0x2d4c2f1399a504a6,1,,," target="_blank" rel="noopener noreferrer">{props.language ? "Vea Más Reseñas" : "See More Reviews"}</a>
            </Fade>
        </div>
    );
}

export default Reviews;