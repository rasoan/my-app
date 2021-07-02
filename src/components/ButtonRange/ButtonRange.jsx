import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const ButtonRange = (props) => {
    const {onChange, text, width, min, max, step} = props;
    const useStyles = makeStyles({
        root: {
            width: width,
        }
    });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                {text}
            </Typography>
                    <Slider
                        onChange={onChange}
                        aria-labelledby="input-slider"
                        min={min}
                        max={max}
                        step={step}
                    />
        </div>
    );
}

export default ButtonRange;