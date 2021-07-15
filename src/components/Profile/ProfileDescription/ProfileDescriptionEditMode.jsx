import React from "react";
import PropTypes from "prop-types";
import {useForm, Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import style from "../../../styles-global/FormControls.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Checkbox, FormControlLabel, List, ListItem} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import Box from "@material-ui/core/Box";

const ProfileDataForm = (props) => {
    const {onSubmitProfileInfo, profile} = props;

    const {register, handleSubmit, formState, control} = useForm({
        defaultValues: {...profile},
    });

    const {errors, touchedFields} = formState;
    return (<>
            <Box my={10} width={"100%"}>
                <form onSubmit={handleSubmit(onSubmitProfileInfo)}>
                    <div>
                        <Controller
                            name={"fullName"}
                            control={control}
                            {...register("fullName")}
                            render={({field}) => <TextField {...field}
                                                            label="Имя и фамилия"/>}
                        />
                    </div>
                    <div>
                        {/*<input type="checkbox" {...register("lookingForAJob")} />*/}
                        <Controller
                            control={control}
                            {...register("lookingForAJob")}
                            render={({field}) => (
                                <FormControlLabel
                                    control={<Checkbox {...field}
                                                       checked={field.value}
                                    />}
                                    label={"Ищу работу"}
                                />)
                            }
                        />
                    </div>
                    <div>
                        <Controller
                            name={"lookingForAJobDescription"}
                            control={control}
                            {...register("lookingForAJobDescription")}
                            render={({field}) => <TextField {...field}
                                                            label="Краткое информация обо мне, как работнике"
                                                            multiline/>}
                        />
                    </div>
                    <div>
                        <Controller
                            name={"aboutMe"}
                            control={control}
                            {...register("aboutMe")}
                            render={({field}) => <TextField {...field}
                                                            label="О себе"
                                                            multiline/>}
                        />
                    </div>
                    <div>
                        <List disablePadding
                            subheader={
                                <ListSubheader
                                    disablePadding
                                    component="div">
                                    Контакты
                                </ListSubheader>
                            }
                        >
                            {Object.keys(profile.contacts).map(key => {
                                    return (<React.Fragment key={`listItem-${key}`}>
                                        <ListItem>
                                            {/*<input*/}
                                            {/*    type="text"*/}
                                            {/*    {...register(`contacts.${key}`)}*/}
                                            {/*/>*/}
                                            <Controller
                                                name={`contacts.${key}`}
                                                control={control}
                                                {...register(`contacts.${key}`)}
                                                render={({field}) => <TextField {...field}
                                                                                label={key}/>}
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
            </Box>
        </>
    );
}

ProfileDataForm.propTypes = {
    handleProfile: PropTypes.func,
    profile: PropTypes.object,
}

export default ProfileDataForm;