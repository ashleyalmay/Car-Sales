import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { deleteFeatures, addFeatures, buyNow } from './actions/actions';
import { someState } from './reducer/reducer';
import { createStore } from 'redux';
import { connect } from 'react-dom';


const App = (state) => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    car: state.car,
    additionalPrice:state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { deleteFeatures, addFeatures, buyNow }
)(App);
