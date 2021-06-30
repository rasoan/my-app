import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";

const ProfilePicture = (props) => {
  const {photos, onSubmit, fileInputRef, ownerPageControlPanel} = props;
  const [image, setImage] = useState("avatar.jpg");
  const [scale, setScale] = useState(1);
  const [preview, setPreview] = useState(null);
  const [editor, setEditor] = useState(null);

  const handleNewImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = (data) => {
    // const img = this.editor.getImageScaledToCanvas().toDataURL();
    const img = this.editor.getImage().toDataURL();
    setPreview(img);
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
    <div className={style.profilePictureContainer}>
      <img className={style.image}
           src={photos?.large}
           alt={"user"}/>
      {ownerPageControlPanel && <form onSubmit={onSubmit} className={style.profilePictureUpload}>
         <div className={style.profilePictureUploadBlock}>
          <input type="file" ref={fileInputRef} />
          <button type="submit">Загрузить файл</button>
        </div>
      </form>}
      <div>
        <Dropzone
            onDrop={handleDrop}
            disableClick={true}
            multiple={false}
            style={{
              width: this.state.width,
              height: this.state.height,
              marginBottom: "35px"
            }}
        >
          <div>
            <ReactAvatarEditor
                ref={setEditorRef}
                scale={parseFloat(scale)}
                width={150}
                height={150}
                rotate={0}
                border={25}
                image={image}
                className="editor-canvas"
            />
          </div>
        </Dropzone>
        <br />
        New File:
        <input name="newImage" type="file" onChange={handleNewImage} />
        <br />
        Zoom:
        <input
            name="scale"
            type="range"
            onChange={handleScale}
            min="1"
            max="2"
            step="0.01"
            defaultValue="1"
        />
        <br />
        <br />
        <input type="button" onClick={handleSave} value="Preview" />
        <br />
        {!!preview && <img src={preview.img} />}
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