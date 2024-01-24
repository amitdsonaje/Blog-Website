import BlogList from './BlogList';
import useFetch from './useFetch';
import React from 'react';
// these are known as hooks

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://10.196.8.134:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList candy= {blogs} title={"All Blogs!"} ></BlogList>}     
        </div>
    );
}
 
export default Home;