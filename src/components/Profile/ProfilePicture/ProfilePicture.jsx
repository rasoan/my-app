import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
import { Link } from '@material-ui/core';
const ProfilePicture = (props) => {
  const {photos, updateProfilePicture} = props;
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [editor, setEditor] = useState(null);

  const inputFileRef = React.useRef();

  const handleNewImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = (data) => {
    if (editor.props.image && (editor.props.image.type === "image/jpeg" || editor.props.image.type === "image/png")) {
      editor.getImageScaledToCanvas().toBlob((blob) => {
        const file = new File([blob], "fileName.png", {type: "image/png"});
        updateProfilePicture(file);
      });
    }
    else if (editor.props.image) {
      console.log("Ошибка, проверьте тип загружаемого файла, он должен быть в формате jpg или png.")
    }
    else {
      console.log("Выберите пожалуйста изображение.")
    }
  };

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
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

  return (
    <div>
      <div className={style.profilePictureContainer}
           onClick={() => inputFileRef.current.click()}
      >
      <img className={style.image}
           src={photos?.large}
           alt={"user"}/>
      <Link
          component="button"
          variant="body2"
          className={style.uploadFileButton}
      >
        Загрузить фотографию
        <input
            type="file"
            onChange={handleNewImage}
            ref={inputFileRef}
            hidden
        />
      </Link>
      </div>
      <div>
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
        <br />
        Zoom:
        <input
            name="scale"
            type="range"
            onChange={handleScale}
            min={"1"}
            max="6"
            step="0.01"
            defaultValue="1"
        />
        <br />
        <br />
        <input type="button" onClick={handleSave} value="Сохранить" />
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  photos: PropTypes.object,
  onSubmit: PropTypes.func,
  fileInputRef: PropTypes.object,
  controlPanels: PropTypes.bool,
}

export default ProfilePicture;