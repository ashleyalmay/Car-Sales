import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      
      <button className="button" onClick={()=>{
        props.deleteFeature(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
