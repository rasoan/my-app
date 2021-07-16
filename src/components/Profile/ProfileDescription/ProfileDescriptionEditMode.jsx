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
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    listSubheaderLinkSocial: {
        paddingLeft: 0,
    },
    listItemLinkSocial: {
        paddingLeft: 30,
    },
    listSocialLinks: {
        width: "100%",
    }
});

const ProfileDataForm = (props) => {
    const {onSubmitProfileInfo, profile} = props;
    const classes = useStyles();
    const {register, handleSubmit, formState, control} = useForm({
        defaultValues: {...profile},
    });

    const {errors, touchedFields} = formState;
    return (<>
            <Typography>Редактировать основную информацию о себе</Typography>
            <Box width={"100%"}>
                <form onSubmit={handleSubmit(onSubmitProfileInfo)}>
                    <List>
                        <ListItem>
                            <Controller
                                name={"fullName"}
                                control={control}
                                {...register("fullName")}
                                render={({field}) => <TextField {...field}
                                                                label="Имя и фамилия"/>}
                            />
                        </ListItem>
                        <ListItem>
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
                        </ListItem>
                        <ListItem>
                            <Controller
                                name={"lookingForAJobDescription"}
                                control={control}
                                {...register("lookingForAJobDescription")}
                                render={({field}) => <TextField {...field}
                                                                label="Краткое информация обо мне, как работнике"
                                                                multiline/>}
                            />
                        </ListItem>
                        <ListItem>
                            <Controller
                                name={"aboutMe"}
                                control={control}
                                {...register("aboutMe")}
                                render={({field}) => <TextField {...field}
                                                                label="О себе"
                                                                multiline/>}
                            />
                        </ListItem>
                        <ListItem>
                            <List className={classes.listSocialLinks}>
                                <ListSubheader className={classes.listSubheaderLinkSocial}>
                                    Контакты
                                </ListSubheader>
                                {Object.keys(profile.contacts).map(key => {
                                        return (<React.Fragment key={`listItem-${key}`}>
                                            <ListItem className={classes.listItemLinkSocial}>
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
                        </ListItem>
                        <ListItem>
                            <Button onClick={handleSubmit(onSubmitProfileInfo)}
                                    variant="contained"
                                    color="primary">
                                Сохранить
                            </Button>
                        </ListItem>
                    </List>
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