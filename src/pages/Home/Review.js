import React from 'react';



const Review = ({ testimonial }) => {
    const { review, name, img, rating } = testimonial

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h4 className='text-sm font-bold'>{name}</h4>

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <p>{review}</p>

                        <p className="text-xs font-bold">rating: {rating}/5</p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Review;