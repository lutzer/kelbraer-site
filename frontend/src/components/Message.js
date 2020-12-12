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
    border: 1px solid #ddd;
    padding: 20px;

    textarea {
      width: 100%;
      height: 100px;
    }
  `

  const PreviewImage = styled.div`
    height: 60px;
    width: 60px;
    border: 1px dashed black;

    img {
      width: 100%;
      height: 100%;
    }
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
        <PreviewImage onClick={() => imageUploader.current.click()}>
          <img
            alt="preview"
            ref={uploadedImage}
          />
        </PreviewImage>
        Click to upload Image
      <button>Send message</button>
    </MessageContainer>
  </div>
  );
}

export default Message;
