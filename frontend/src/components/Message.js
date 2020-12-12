import styled from "styled-components"
import { useRef } from "react"

function Message() {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
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

  const MessageContainer = styled.div`
    max-width: 600px;
  `

  return (
    <MessageContainer>
      <h2>Send a message to us</h2>
        <textarea></textarea>
        <input type="file" accept="image/*" onChange={handleImageUpload} multiple = "false" />
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "5px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          alt="preview"
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      Click to upload Image
    </div>
    <button>Send message</button>
  </MessageContainer>
  );
}

export default Message;
