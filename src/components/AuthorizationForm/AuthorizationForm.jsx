import React from "react";
import {NavLink} from 'react-router-dom'
import PropTypes from "prop-types";
import style from "../../styles-global/FormControls.module.scss";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AuthorizationForm = (props) => {
    const classes = useStyles();
    const {handleRegistration, captchaUrl} = props;

    const validationSchema = Yup.object().shape({
        login: Yup.string()
            .required('Поле обязательно для заполнения.')
            .min(2, 'Миниум 2 символа!')
            .max(50, 'Максимум 50 символов')
            .matches(/[@]/, 'Символ @ обязателен'),
        password: Yup.string()
            .required('Поле обязательно для заполнения.')
            .min(2, 'Миниум 2 символа!')
            .max(50, 'Максимум 50 символов'),
    });

    const {register, formState, handleSubmit, control} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    });

    const {errors, touchedFields} = formState;

    return (
        <form onSubmit={handleSubmit(handleRegistration)} className={classes.form}>
            <div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Адрес электронной почты"
                    autoComplete="email"
                    autoFocus
                    placeholder="art@gmail.com"
                    type="text"
                    className={(errors.login && style.inCorrect) || (touchedFields.login && style.correct)}
                    {...register("login")}
                />
                {errors.login && <p>{errors.login.message}</p>}
            </div>
            <div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    placeholder="LoG234HH"
                    className={(errors.password && style.inCorrect) || (touchedFields.password && style.correct)}
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <Controller
                    name="rememberMe"
                    defaultValue={false}
                    control={control}
                    rules={{required: true}}
                    render={({field}) => (
                        <FormControlLabel {...field} control={<Checkbox/>} label="Запомнить меня"/>
                    )}
                />
            </div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Залогиниться
            </Button>
            <div>
                {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
                {captchaUrl && <div><input type="text"
                                           {...register("captcha")} />
                </div>}
            </div>

            <Box display="flex" flexDirection="row-reverse">
                <Link component={NavLink} to="/profile">
                    Войти не авторизованным
                </Link>
            </Box>
            <Box mt={5}>
                    <Typography color="inherit" variant="body2" color="textSecondary" align="center">
                        Социальная сеть <br />{new Date().getFullYear()}
                    </Typography>
            </Box>
        </form>
    );
}

AuthorizationForm.propTypes = {
    captchaUrl: PropTypes.string.isRequired,
    handleRegistration: PropTypes.func.isRequired,
};

export default AuthorizationForm;