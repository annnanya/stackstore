import React from "react";

function Cards({ item }) {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img src={item.image} alt="Books" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-outline badge-success">{item.category}</div>
                        </h2>
                        <p className="text-sm">{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className=" px-2 py-1 rounded-full border-[2px]">${item.price}</div>
                            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-600 hover:text-white duration-200">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
