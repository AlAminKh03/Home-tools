import React from 'react';

const Review = ({ testimonial }) => {
    const { review, name, img, location } = testimonial

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>{name}</h4>
                        <p className="text-xs font-bold">{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;