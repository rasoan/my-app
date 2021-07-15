import React from "react";
import PropTypes from "prop-types";
import {useForm, Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import style from "../../../styles-global/FormControls.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {List, ListItem} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

const ProfileDataForm = (props) => {
    const {onSubmitProfileInfo, profile} = props;

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

    const {register, handleSubmit, formState, control} = useForm({
        defaultValues: {...profile},
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });

    const {errors, touchedFields} = formState;
    return (<>
            <form onSubmit={handleSubmit(onSubmitProfileInfo)}>
                <div>
                    <b>Fullname</b>
                    <input type="text" {...register("fullName")} />
                </div>
                <div>
                    <p><b>Looking for a job</b></p>
                    <input type="checkbox" {...register("lookingForAJob")} />
                </div>
                <div>
                    <p><b>Looking for a job Description</b></p>
                    <textarea {...register("lookingForAJobDescription")} />
                </div>
                <div>
                    <p><b>About me:</b></p>
                    <Controller as={TextField} name="aboutMe" control={control} defaultValue="" />
                </div>
                <div>
                        <List
                            subheader={
                                <ListSubheader component="div" id="Contacts-text-fields">
                                    Контакты
                                </ListSubheader>
                            }
                        >
                            {Object.keys(profile.contacts).map(key => {
                                console.log(`contacts.${key}`)
                                    return (<React.Fragment key={`listItem-${key}`}>
                                        <ListItem>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                type="text"
                                                {...register(`contacts.${key}`)}
                                            />
                                            {/*{errors[key] && <p>{errors[key].message}</p>}*/}
                                        </ListItem>
                                    </React.Fragment>);
                                }
                            )}
                        </List>
                </div>

                <Button>Сохранить</Button>
            </form>
        </>
    );
}

ProfileDataForm.propTypes = {
    handleProfile: PropTypes.func,
    profile: PropTypes.object,
}

export default ProfileDataForm;