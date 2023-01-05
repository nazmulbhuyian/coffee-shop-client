import React from 'react';
import BagsCategories from '../BagsCategories/BagsCategories';
import Banner from '../Banner/Banner';
import BannerTeo from '../BannerTwo/BannerTeo';
import CoffeeCategories from '../Coffee-Category/CoffeeCategories';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoffeeCategories></CoffeeCategories>
            <BannerTeo></BannerTeo>
            <BagsCategories></BagsCategories>
            <Review></Review>
        </div>
    );
};

export default Home;