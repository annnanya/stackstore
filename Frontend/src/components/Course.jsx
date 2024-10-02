import React from 'react'
import list from '../../public/list.json'
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Course = () => {
    const book = list;
    return (
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl  md:text-4xl">
                    We're delighted to have you <span className="text-green-500">Here!</span>
                </h1>
                <p className="mt-12">
                    Welcome to our online bookstore courses page! Here, you'll find a variety of courses designed to enhance your literary journey.
                    Whether you're a budding author, an avid reader, or simply curious about the world of books, our courses offer something for everyone.
                    Explore, learn, and grow with us as you dive into the endless possibilities of the written word.
                </p>
                {/* <Link to="/">
                    <button className="btn btn-outline btn-success mt-8">Back</button>
                </Link> */}
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
                {book.map((item) => (
                    <div key={item.id}>
                        <Cards item={item} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Course