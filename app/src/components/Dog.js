import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Dog = props => {

    useEffect(() => {
        props.fetchDog()
    }, [])

    return (
        <div>
            <h1>Dog</h1>
            {props.message && <img src={props.message} alt="dog"/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        message: state.dogReducer.message,
        isFetching: state.dogReducer.isFetching,
        status: state.dogReducer.status,
        error: state.dogReducer.error
    }
}

export default connect(mapStateToProps,
    {}
    )(Dog);