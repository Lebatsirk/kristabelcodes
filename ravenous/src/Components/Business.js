import React from "react";

import styles from "./Styles/Business.module.css";

const business = {
  image: "veganpizza.jpeg",
  name: "Vegan Pizza Palace",
  address: "123 Fake Road",
  city: "Erehwon",
  state: "Worcestershire",
  zipcode: "AB1 2YZ",
  category: "Italian",
  rating: 4.3,
  reviewCount: 126,
  altText: "Picture representing business",
};

/* const business = [
  {
    image: "veganpizza.jpeg",
    name: "Vegan Pizza Palace",
    address: "123 Fake Road",
    city: "Erehwon",
    state: "Worcestershire",
    zipcode: "AB1 2YZ",
    category: "Italian",
    rating: 4.3,
    reviewCount: 126,
    altText: "Picture representing business",
  },
  {
    image: "beanquesadilla.jpeg",
    name: "Mexicana Vegana",
    address: "123 Fake Road",
    city: "Erehwon",
    state: "Worcestershire",
    zipcode: "AB1 2YZ",
    category: "Mexican",
    rating: 4.8,
    reviewCount: 837,
    altText: "Picture representing business",
  },
  {
    image: "chickpeacurry.jpeg",
    name: "Indian Veggie Delights",
    address: "123 Fake Road",
    city: "Erehwon",
    state: "Worcestershire",
    zipcode: "AB1 2YZ",
    category: "Indian",
    rating: 4.2,
    reviewCount: 94,
    altText: "Picture representing business",
  },
  {
    image: "mushroomburger.jpeg",
    name: "Vamos Veggie",
    address: "123 Fake Road",
    city: "Erehwon",
    state: "Worcestershire",
    zipcode: "AB1 2YZ",
    category: "Burgers",
    rating: 3.9,
    reviewCount: 224,
    altText: "Picture representing business",
  },
  {
    image: "tofuvegstirfry.jpeg",
    name: "VegWok",
    address: "123 Fake Road",
    city: "Erehwon",
    state: "Worcestershire",
    zipcode: "AB1 2YZ",
    category: "Chinese",
    rating: 4.5,
    reviewCount: 601,
    altText: "Picture representing business",
  },
  {
    image: "tofuvegthaicurry.jpeg",
    name: "Thai Taste Temptations",
    address: "123 Fake Road",
    city: "Erehwon",
    state: "Worcestershire",
    zipcode: "AB1 2YZ",
    category: "Thai",
    rating: 4.9,
    reviewCount: 454,
    altText: "Picture representing business",
  },
]; */

function Business() {
  return (
    <div className={styles.businessContainer}>
      <p className={styles.businessName}>{business.name}</p>
      <img
        className={styles.businessImg}
        src={"images/" + business.image}
        alt={business.altText}
      />
      <p className={styles.businessAddress}>
        Find us at: {business.address}, {business.city}, {business.state},{" "}
        {business.zipcode}
      </p>
      <p className={styles.businessCategory}>Cuisine: {business.category}</p>
      <p className={styles.businessRating}>Rating: {business.rating}</p>
      <p className={styles.businessReview}>Reviews: {business.reviewCount}</p>
    </div>
  );
}

// Alternative method of creating function
/* const Business = () => {
  return (
    <div>
      <div>etc</div>
    </div>
  );
}; */

export default Business;
