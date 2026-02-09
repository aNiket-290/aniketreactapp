import React from 'react'

function Alert(props) {
    //function to capitalize word
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className='mb-3' style={{height:'90px'}}>
    {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <p><strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}</p>
    </div>}
    </div>
  )
}

export default Alert
