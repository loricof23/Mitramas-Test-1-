import React from 'react';
import './button.css';

const Button = ({
    children,
    type,
}) => {
    const buttonClassName = type === 'primary'? 'btn-primary' : 'btn-link';

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    children : '',
    type: 'primary',
}

export default Button;