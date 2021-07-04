import React, {useState} from "react";
import style from "./UploaderPhoto.module.scss"
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
import ButtonRange from "../ButtonRange";
import Button from "../Button";
import {Container, Grid, GridList, Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
    uploadFileBox: {
        width: "100%",
        height: "100%",
        diaplay: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    uploadFileBoxOnDrop: {
        backgroundColor: "#2ce4058f",
    }
});

const UploaderPhoto = (props) => {
    const {updatePhotoFunction} = props;
    let classes = useStyles({border: "1px solid black"});
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [editor, setEditor] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const uploadFileRef = React.useRef();

    const handleDown = () => {
        uploadFileRef.current.value = null;
        setImage(null);
    }

    const handleSave = () => {
        if (editor.props.image && (editor.props.image.type === "image/jpeg" || editor.props.image.type === "image/png")) {
            editor.getImageScaledToCanvas().toBlob((blob) => {
                const file = new File([blob], "fileName.png", {type: "image/png"});
                updatePhotoFunction(file);
            });
        } else if (editor.props.image) {
            console.log("Ошибка, проверьте тип загружаемого файла, он должен быть в формате jpg или png.")
        } else {
            console.log("Выберите пожалуйста изображение.")
        }
    };

    const handleScale = (event, value) => {
        const scale = parseFloat(value);
        setScale(scale);
    };

    const setEditorRef = (editor) => {
        if (editor) {
            setEditor(editor);
        }
    };

    const handleDrop = (acceptedFiles) => {
        setDragOver(false);
        setImage(acceptedFiles[0]);
    };

    const dragOverHandler = () => {
        setDragOver(true);
        console.log("Изображение наведено");
    }

    const dragLeaveHandler = () => {
        setDragOver(false);
        console.log("Изображение покинуло поле");
    }
// `${classes.root} ${dragOver ? classes.dragOver : !image ? classes.dragLeave: classes.dragDefault}`
    return <div>
        <Dropzone onDrop={handleDrop}
                  onDragEnter={dragOverHandler}
                  onDragLeave={dragLeaveHandler}>
            {({getRootProps, getInputProps}) => (
                <div style={{width: 320, height: 320, display: "flex", justifyContent: "center", alignItems: "center"}}
                     {...getRootProps({className: "dropzone"})}
                     onClick={() => uploadFileRef.current.click()}
                     className={`${style.dropzone} ${dragOver ? style.dropzoneDragOver : !image ? style.dropzoneDragLeave : style.transparentBorder}`}
                >
                    <input {...getInputProps()}
                           ref={uploadFileRef}/>
                    {image && <ReactAvatarEditor
                        ref={setEditorRef}
                        scale={parseFloat(scale)}
                        width={250}
                        height={250}
                        rotate={0}
                        border={20}
                        image={image}
                        className="editor-canvas"
                    />}
                    {!image && <Box className={`${classes.uploadFileBox} ${dragOver && classes.uploadFileBoxOnDrop}`}
                                    display={"flex"}>
                        <Typography variant="h8" component="span">Загрузить фотографию</Typography>
                    </Box>}
                    <div
                        className={`${style.dropzoneBottomRL} ${dragOver ? style.dropzoneBottomRLDragOver : !image ? style.dropzoneBottomRLDragLeave : style.transparentBorder}`}/>
                </div>
            )}
        </Dropzone>

        <Box display="flex" justifyContent="center" alignItems="center">
            <ButtonRange onChange={handleScale}
                         min={1}
                         max={5}
                         step={0.01}
                         width={250}
                         text={"Зум"}
            />
        </Box>
        <Grid container justify={"center"} spacing={3}>
            {!image && <Grid item>
                <Button text={"Загрузить фотографию"}
                        onClick={() => uploadFileRef.current.click()}/>
            </Grid>}
            {image && <Grid item>
                <Button text={"Сохранить"}
                        onClick={handleSave}/>
            </Grid>}
            {image && <Grid item>
                <Button text={"Вернутся назад"}
                        onClick={handleDown}/>
            </Grid>}
        </Grid>
    </div>
}

export default UploaderPhoto;