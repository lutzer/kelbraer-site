import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import SignaturePad from 'react-signature-canvas';
import Popup from "reactjs-popup";
import trimCanvas from "trim-canvas";
import styled, { createGlobalStyle } from 'styled-components';
import "./SketchPad.css";


export default function SketchPad() {
    const [imageURL, setImageURL] = useState(null);
    const [open, setOpen] = useState(false);

    // closing modal
    const closeModal = () => setOpen(false);

    const sigCanvas = useRef({});
    
    // clear and save functions
    const clear = () => sigCanvas.current.clear();

    const save = () => 
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")) & closeModal();

    // styled components
    const Button = styled.button`
        position: absolute;
        top: 70px;
        right:10px;
    }`;

    return (
        <div>
            <h1>Sketchpad</h1>
            <button type="button" onClick={()=> setOpen(o => !o)}>add sketch</button>
            <Popup 
                modal 
                open={open}
                closeOnDocumentClick onClose={closeModal}
            >
                <SignaturePad 
                    ref={sigCanvas}
                    canvasProps={{
                        width: 320, height: 400,
                        className: 'sigCanvas'
                    }}
                />
                <Button onClick={closeModal}>X</Button>
                <button onClick={clear}>clear</button>
                <button onClick={save}>save</button>
            </Popup>
            <br/>
            <br/>
            {imageURL ? (
                <img
                    src={imageURL}
                    alt="My doodle"
                    style={{
                        display: "block",
                        margin: "0 auto",
                        border: "1px solid black",
                        width: "154px"
                    }}
                />
            ):null}
        </div>
    );
}
