import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1>first react redux app</h1>
                <p>first react reduct responsive web app with hot reloading</p>
                <Link to="about" className="btn btn-primary btn-lg">learn more about us</Link>
            </div>
        );
    }
}

export default HomePage;