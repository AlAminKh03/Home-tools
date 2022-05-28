import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-amber-200 border-4 border-indigo-500/100 m-10'>
                <h1 className='text-xl font-bold'>How will you improve the performance of a React Application?</h1>
                <p className='text-left px-16'>There's many way to improve the performace of a react application , Although it is very fast also we can take some steps to make it more faster</p>
                <ul>
                    <li>always keep state in local file</li>
                    <li>make only necessary props</li>
                    <li>don't put unnecessary import cause it takes time to e render</li>
                    <li>pass only the relevant value to Main instead of the style object</li>
                </ul>
            </div>
            <div className='bg-amber-200 border-4 border-indigo-500/100 m-10'>
                <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-left px-16'>There are four main types of state you need to properly manage in your React apps:
                </p>
                <ul>
                    <li>Local state.</li>
                    <li>Global state.</li>
                    <li>Server state..</li>
                    <li>URL state.</li>
                </ul>
            </div>
            <div className='bg-amber-200 border-4 border-indigo-500/100 m-10'>
                <h1 className='text-xl font-bold'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>

                <p className='text-left px-16'>State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component.</p>
            </div>
            <div className='bg-amber-200 border-4 border-indigo-500/100 m-10'>
                <h1 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h1>
                <p className='text-left px-16'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>
            </div>
            <div className='bg-amber-200 border-4 border-indigo-500/100 m-10'>
                <h1 className='text-xl font-bold'> How does prototypical inheritance work?</h1>

                <p className='text-left px-16'>In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it.</p>
            </div>
        </div>
    );
};

export default Blogs;