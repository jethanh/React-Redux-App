import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchDog } from '../store/actions/dogActions';

const Dog = props => {

    useEffect(() => {
        props.fetchDog()
    }, []);

    return (
        <div>
            <h1>Dog</h1>
            {props.isFetching && <Loader type="Puff" color="#00BFFF" height={20} width={20}/>}
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
    { fetchDog }
    )(Dog);