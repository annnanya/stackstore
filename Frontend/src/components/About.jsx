import React from 'react'
import BookStore from "/BookStore.jpg"

const AboutPage = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mb-8 mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl  md:text-4xl">
                        We're delighted to have you <span className="text-green-500">Here!</span>
                    </h1>
                    <p className="mt-12">
                        Book Stack is your one-stop online bookstore, offering a diverse
                        collection of books from various genres. Whether you're looking for
                        the latest releases or classic literature, we have it all. Our
                        mission is to provide readers with an easy and convenient way to
                        discover and purchase their favorite books.
                        With our carefully curated selection, we aim to cater to the tastes of
                        every kind of reader—whether you're a fan of fiction, non-fiction, or
                        academic material. From bestsellers to hidden gems, we strive to be a
                        place where book lovers can always find something new to explore.
                    </p>
                    <div className="flex justify-center mt-10">
                        <img
                            src={BookStore}
                            alt="Bookstore Image"
                            className="rounded-lg md:w-[550px] md:h-[420px] md:ml-12"
                        />
                    </div>
                    <p className="mt-10">
                        At Book Stack, we believe in the transformative power of stories to inspire, educate,
                        and entertain. Books have the ability to transport readers to different worlds, broaden
                        perspectives, and spark meaningful conversations. Whether you're an avid reader,
                        a lifelong learner, or someone looking to dive into a new genre, we’re here to be a part
                        of your literary journey. Our curated selection of titles ensures that there's something
                        for everyone from gripping novels and thought provoking non-fiction to timeless classics and
                        newly discovered gems.
                        <br /><br />
                        Join our community of passionate book lovers today and explore the endless possibilities
                        that books have to offer. Whether you're on a quest to build an expansive personal library
                        or searching for the perfect gift to share the love of reading with someone special,
                        Book Stack is your trusted companion. We’re dedicated to making your reading experience
                        as enjoyable and seamless as possible, providing everything from personalized recommendations
                        to a user friendly shopping experience. Let us help you discover your next great read and
                        embark on a journey through the magical world of books.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage;
