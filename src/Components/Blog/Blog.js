import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <h1 className='text-2xl p-2'>What is purpose of React Router?</h1>
                <p>React Router is a standard library for routing in React.
                 It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                </p>
            </div>
            <div className='blog'>
                <h1 className='text-2xl p-2'>How does Context API Work?</h1>
                <p>
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. 
                Consumer as it so happens is a component that consumes and uses the state
                  
                </p>
            </div>
            <div className='blog'>
                <h1 className='text-2xl p-2'>What is UseHref?</h1>
                <p>
                The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.
                </p>
            </div>
        </div>
    );
};

export default Blog;