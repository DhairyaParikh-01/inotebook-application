import React from 'react'

export const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                A simple Alert
                {/* {props.message} */}
            </div>
        </div>
    )
}

export default Alert;
