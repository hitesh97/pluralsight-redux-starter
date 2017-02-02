import React, {PropTypes} from 'react';
import Header from './common/header';
import {connect} from 'react-redux';

const ProgressBar = require('react-progress-bar-plus');

class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <ProgressBar percent={this.props.loading}/>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading : (state.ajaxCallsInProgress == 0) ? 100 : 75
    };
}

export default connect(mapStateToProps)(App);
