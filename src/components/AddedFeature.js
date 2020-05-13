import React from 'react';
import { connect } from 'react-redux';
import { deleteFeatures } from '../actions/actions'

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.deleteFeatures(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}
export default connect(mapStateToProps, { deleteFeatures })(AddedFeature);