import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import SignaturePad from 'react-signature-canvas';
import Popup from "reactjs-popup";
import trimCanvas from "trim-canvas";
import styled, { createGlobalStyle } from 'styled-components';
import "./SketchPad.css";


export default function SketchPad(props) {
    // closing modal
    const closeModal = () => props.setOpen(false);

    const sigCanvas = useRef({});
    
    // clear and save functions
    const clear = () => sigCanvas.current.clear();
    const save = () => 
        props.setSketch(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")) & closeModal();

    // styled components
    const Button = styled.button`
        position: absolute;
        top: 70px;
        right:10px;
    }`;

    return (
        <div>
            <Popup 
                modal 
                open={props.open}
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
        </div>
    );
}
