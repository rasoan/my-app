import React from 'react';
import PropTypes from 'prop-types';
import ButtonMU from '@material-ui/core/Button';

const Button = (props) => {
    const {handlerClick, text, component,
           isDisable, color, to, variant} = props;
    return (
        <ButtonMU variant={variant}
                  color={color}
                  onClick={handlerClick}
                  component={component}
                  disabled={isDisable}
                  to={to}>
            {text}
        </ButtonMU>
    );
};

Button.defaultProps = {
    handlerClick: () => {
    },
    component: 'button',
    isDisable: false,
    to: null,
    variant: "outlined",
    color: "primary",
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;