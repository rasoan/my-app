import React, {useState} from "react";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
import ButtonRange from "../ButtonRange";
import Button from "../Button";
import {Link} from "@material-ui/core";

const UploaderPhoto = (props) => {
    const {updatePhotoFunction} = props;
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [editor, setEditor] = useState(null);
    const uploadFileRef = React.useRef();

    const handleNewImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSave = (data) => {
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
        setImage(acceptedFiles[0]);
    };
    return <div>
        <Dropzone
            onDrop={handleDrop}
            disableClick={true}
            multiple={false}
            style={{
                width: "270px",
                height: "300px",
                marginBottom: "35px"
            }}
        >
            {() => {
                return (<div>
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
                </div>)
            }}
        </Dropzone>
        <ButtonRange onChange={handleScale}
                     min={1}
                     max={5}
                     step={0.01}
                     width={250}
                     text={"Зум"}
        />
        <Link
            component="button"
            variant="body2"
             onClick={() => uploadFileRef.current.click()}
        >
            Загрузить фотографию
            <input
                type="file"
                onChange={handleNewImage}
                ref={uploadFileRef}
                hidden
            />
        </Link>
        <Button text={"Сохранить"}
                onClick={handleSave}
        />
    </div>
}

export default UploaderPhoto;