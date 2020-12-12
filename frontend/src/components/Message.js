import styled from "styled-components"
import { useRef, useState } from "react"
import SketchPad from './SketchPad';

function Message() {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const [imageUploaded, setImageUploaded] = useState(true);

  // sketchpad
  const [sketch, setSketch] = useState("");
  const [sketchIsOpen, setSketchIsOpen] = useState(false);
  const handleSketchUpload = () => setSketchIsOpen(true);
  
  // const clearSketch = () => setSketch("");

  const handleImageUpload = e => {
    //setImageUploaded(true);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  };

  const clearImageInput = e => {
    imageUploader.current.value = ""
    const {current} = uploadedImage;
    current.src = "";
    //setImageUploaded(false);
  }

  const handleSubmit = () => {
    //TODO
  }

  const MessageContainer = styled.div`
    border: 1px solid #ddd;
    padding: 20px;

    textarea {
      width: 100%;
      height: 100px;
      border: 0;
      font-size: var(--s0);
    }
  `

  const PreviewImage = styled.div`
    visibility: ${props => props.visible ? "visible" : "hidden"};
    position: relative;
    height: 100px;
    width: 100px;
    border: 1px dashed black;

    img {
      width: 100%;
      height: 100%;
    }
  `

  const Uploaded = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const SketchImage = styled.div`
    display: "block",
    margin: "100 auto",
    border: "1px solid black",
    height: "102px"
    `

  const RemoveButton = styled.div`
    height: 33px;
    width: 33px;
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 99px;
  `

    const RemoveSketchButton = styled.div`
    height: 33px;
    width: 33px;
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 99px;
  `

  const AddButton = styled.div`
    border: 1px solid #ccc;
  `

  return (
    <div>
      <h2>Send a message to us</h2>
      <MessageContainer>
        <textarea placeholder="Your message..."></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
        <Uploaded>
          <PreviewImage visible={imageUploaded}>
            <RemoveButton onClick={clearImageInput}>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.5" cy="16.5" r="16.5" fill="black"/>
              <path d="M9 9L24 24M24 9L9 24" stroke="white" stroke-width="2"/>
            </svg>
            </RemoveButton>
            <img
              alt="preview"
              ref={uploadedImage}
            />
          </PreviewImage>
          {sketch ? (
            <PreviewImage visible={imageUploaded}>
              <SketchImage>
                <RemoveSketchButton onClick={()=> setSketch("")}>
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16.5" cy="16.5" r="16.5" fill="black"/>
                    <path d="M9 9L24 24M24 9L9 24" stroke="white" stroke-width="2"/>
                  </svg>
                </RemoveSketchButton>
                <img
                    src={sketch}
                    alt="My doodle"
                />
              </SketchImage>
              </PreviewImage>
                ):null}
        </Uploaded>
        <AddButton onClick={handleSketchUpload}>Add Sketch</AddButton>
        <SketchPad open={sketchIsOpen} setOpen={setSketchIsOpen} setSketch={setSketch}/>
        <AddButton onClick={() => imageUploader.current.click()}>Add Image</AddButton>
    </MessageContainer>
    <button onClick={handleSubmit}>Send message</button>
  </div>
  );
}

export default Message;
