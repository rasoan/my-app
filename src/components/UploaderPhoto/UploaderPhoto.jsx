import React, {useState} from "react";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
import ButtonRange from "../ButtonRange";
import Button from "../Button";
import {Container, Grid, GridList} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const UploaderPhoto = (props) => {
    const {updatePhotoFunction} = props;
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [editor, setEditor] = useState(null);
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
        console.log("hello")
        setImage(acceptedFiles[0]);
    };

    return <div>
        <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()}
                           ref={uploadFileRef} />
                    <ReactAvatarEditor
                        ref={setEditorRef}
                        scale={parseFloat(scale)}
                        width={270}
                        height={300}
                        rotate={0}
                        border={25}
                        image={image}
                        className="editor-canvas"
                    />
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