import React from 'react';

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-white m-18">
            < div className="hero-content flex-col lg:flex-row-reverse" >
                <div className="text-center lg:text-left ml-12 mr-12" >
                    <h1 className="text-5xl font-bold" > Feedback</h1 >
                    <p className="py-6" > Let us know the experience you had in there.We always appriciate your valuable comments and that will increase our community more stronger</p >
                </div >
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-24" >
                    <div className="card-body" >
                        <div className="form-control" >
                            <label className="label" >
                                <span className="label-text" > Your Name</span >
                            </label >
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div >
                        <div className="form-control" >
                            <label className="label" >
                                <span className="label-text" > Email</span >
                            </label >
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div >
                        <div className="form-control" >
                            <label className="label" >
                                <span className="label-text" > Comment</span >
                            </label >
                            <input type="text" placeholder="Comment" className="input input-bordered input-lg w-full max-w-xs" />
                        </div >
                        <div className="form-control mt-6" >
                            <button className="btn btn-primary" > Submit</button >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Contact;