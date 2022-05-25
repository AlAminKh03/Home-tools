import React from 'react';

const Contact = () => {
    return (
        <div class="hero min-h-screen bg-white m-18">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Feedback</h1>
                    <p class="py-6">Let us know the experience you had in there. We always appriciate your valuable comments and that will increase our community more stronger</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Comment</span>
                            </label>
                            <input type="text" placeholder="Comment" class="input input-bordered input-lg w-full max-w-xs" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;