import React from 'react';

    const ButtonProps = {
        label: string,
        onClick?: () => void,
        variant?: 'primary' | 'secondary'
    }


function Button({label, onClick, variant = 'primary'}: ButtonProps) {
    return (
        <div>
            
        </div>
    );
}

export default Button;

