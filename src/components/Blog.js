import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <p className='fs-3 mt-5 mb-3'>1.Difference between javascript and nodejs?</p>
            <p className='mb-3'>Node.js primarily falls under the Frameworks (Full Stack) category.
                Express.js is classified under Microframeworks (Backend) category.
                Building block
                Node.js is built on Google’s V8 engine.
                Express.js is built on Node.js.
                Features
                Node.js has fewer features than Express.js.
                Express.js embodies more features since it is an addition to Node.js functionalities.
                Usage
                Node.js is used for building server-side, I/O, event driven apps.
                Express.js uses approaches of Node.js for building web apps and APIs.
                Dependence
                Node.js can be used independently from Express.js.
                Express.js requires Node.js.
                Time
                Node.js demands more time because of multifaceted tasks that ask for more lines of code and, therefore, more time.
                Express.js demands less time because it can be written in less number of lines and a few minutes.
                View model
                Node.js doesn’t support the view model.
                Express.js supports the view model.
                Programming language
                Node.js is written in C, C++, JavaScript.
                Express.js is written in JavaScript.
                Controllers
                In Node.js, controllers are not provided.
                In Express.js, controllers are provided.
                Routing
                In Node.js, routing is not provided.
                In Express.js, routing is provided.
                Middleware
                Node.js doesn’t use provision.
                Express.js uses middleware for arranging functions systematically.</p>


            <p className='fs-3 mt-5 mb-3'>2.When should you use nodejs and when should you use mongodb?</p>
            <p className='mb-3'>MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>

            <p className='fs-3 mt-5 mb-3'>3.Differences between sql and nosql databases.?</p>
            <p className='mb-3'>If you are looking for consistency, reliability, and a system to query structured data you choose SQL databases.

                However, if you are looking to work faster and independently for storing and retrieving data like graphs, binary numbers, etc choose NoSQL databases.</p>


            <p className='fs-3  mt-5 mb-3'>4.What is the purpose of jwt and how does it work?</p>
            <p className='mb-3'>JSON Web Token is a standard used to create access tokens for an application.

                It works this way: the server generates a token that certifies the user identity, and sends it to the client.

                The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.

                This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests either to a REST or a GraphQL API.</p>




        </Container>
    );
};

export default Blog;