import React from 'react';
import { connect } from 'react-redux';
import { addFeatures } from '../actions/actions'

const AdditionalFeature = props => {
  
  return (
    <li>
      S
      <button onClick={() => props.addFeatures(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps, { addFeatures })(AdditionalFeature);