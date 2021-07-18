import React, {useState} from "react";
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
    },
    defaultListItem: {
        display: "block",
    }
});

const ProfileDataForm = (props) => {
    const {onSubmitProfileInfo, profile} = props;
    const MAX_LENGTH_TEXTAREA = 300;
    const MAX_LENGTH_LINKS_SOCIAL = 100;
    const [toggleShowingLookingForAJob, setToggleShowingLookingForAJob] = useState(profile.contacts.lookingForAJob);

    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Поле обязательно для заполнения'),
        lookingForAJob: Yup.boolean(),
        lookingForAJobDescription: Yup.string()
            .when('lookingForAJob', {
                is: true,
                then: Yup.string().required('Снимите галочку под чекбоксом "Ищу работу" или заполните это поле'),
            }),
        contacts: Yup.object().shape({
            ...Object.entries(profile.contacts)
                .map(array => ({
                    [array[0]]: Yup
                        .string()
                        .matches(/htt(p|ps):\/\/(?=.{1,}\..{1,})/i, "Неверный формат ссылки (например http(s)://v.l)")
                }))
                .reduce((result, item) => {
                    const key = Object.keys(item)[0];
                    result[key] = item[key];
                    return result;
                }),
        }),
    });


    const {register, handleSubmit, formState, control, getValues} = useForm({
        defaultValues: {...profile},
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    });

    const {errors} = formState;


    return (<>
            <Typography>Редактировать основную информацию о себе</Typography>
            <Box width={"100%"}>
                <form onSubmit={handleSubmit(onSubmitProfileInfo)}>
                    <List>
                        <ListItem className={classes.defaultListItem}>
                            <Controller
                                control={control}
                                {...register("fullName")}
                                render={({field}) => <TextField {...field}
                                                                inputProps={{maxLength: MAX_LENGTH_TEXTAREA}}
                                                                label="Имя и фамилия"

                                />}
                            />
                            {errors["fullName"] &&
                            <Typography color={"error"}>{errors["fullName"].message}</Typography>}
                        </ListItem>
                        <ListItem className={classes.defaultListItem}>
                            <Controller
                                control={control}
                                {...register("lookingForAJob")}
                                render={({field}) => {
                                    setToggleShowingLookingForAJob(getValues("lookingForAJob"))
                                    return <FormControlLabel
                                        control={<Checkbox {...field}
                                                           checked={field.value}
                                        />}
                                        label={"Ищу работу"}
                                    />}
                                }
                            />
                        </ListItem>
                        {toggleShowingLookingForAJob && <ListItem className={classes.defaultListItem}>
                            <Controller
                                control={control}
                                {...register("lookingForAJobDescription")}
                                render={({field}) => <TextField {...field}
                                                                inputProps={{maxLength: MAX_LENGTH_TEXTAREA}}
                                                                label="Краткое информация обо мне, как работнике"
                                                                multiline/>}
                            />
                            {errors["lookingForAJobDescription"] &&
                            <Typography color={"error"}>{errors["lookingForAJobDescription"].message}</Typography>}
                        </ListItem>}
                        <ListItem className={classes.defaultListItem}>
                            <Controller
                                control={control}
                                {...register("aboutMe")}
                                render={({field}) => <TextField {...field}
                                                                inputProps={{maxLength: MAX_LENGTH_TEXTAREA}}
                                                                label="О себе"
                                                                multiline/>}
                            />
                            {errors["aboutMe"] && <Typography color={"error"}>{errors["aboutMe"].message}</Typography>}
                        </ListItem>
                        <ListItem>
                            <List className={classes.listSocialLinks}>
                                <ListSubheader className={classes.listSubheaderLinkSocial}>
                                    Контакты
                                </ListSubheader>
                                {Object.keys(profile.contacts).map(key => {
                                        return (<React.Fragment key={`listItem-${key}`}>
                                            <ListItem
                                                className={`${classes.defaultListItem} ${classes.listItemLinkSocial}`}>
                                                <Controller
                                                    control={control}
                                                    {...register(`contacts.${key}`)}
                                                    render={({field}) => {
                                                        return <TextField {...field}
                                                                          inputProps={{maxLength: MAX_LENGTH_LINKS_SOCIAL}}
                                                                          label={key}
                                                        />
                                                    }}
                                                />
                                                {errors['contacts']?.[key] &&
                                                <Typography color={"error"}>{errors['contacts'][key].message}</Typography>}
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