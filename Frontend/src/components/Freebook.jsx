import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import list from '../../public/list.json'

export const Freebook = () => {

    const book = list.filter(c => c.category == "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p className="text-sm">
                        Explore a range of free courses designed to expand your knowledge and skills.
                        From foundational topics to advanced studies, these resources are available to help you learn at your own pace.
                        Start your educational journey without any cost today!
                    </p>

                </div>
                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
