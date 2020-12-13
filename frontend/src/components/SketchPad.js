import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import SignaturePad from 'react-signature-canvas';
import Popup from "reactjs-popup";
import trimCanvas from "trim-canvas";
import styled from 'styled-components';

export default function SketchPad(props) {
    // closing modal
    const closeModal = () => props.setOpen(false);

    const sigCanvas = useRef({});
    
    // clear and save functions
    const clear = () => sigCanvas.current.clear();
    const save = () => 
        props.setSketch(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")) & closeModal();

    // styled components
    const Container = styled.div`

    `


    const Button = styled.button`
    }`;

    const Buttons = styled.div`
        width: 100%;
    `

    return (
        <Container>
            <Popup 
                modal 
                open={props.open}
                closeOnDocumentClick onClose={closeModal}
            >
                <Button onClick={closeModal}>X</Button>
                <SignaturePad 
                    ref={sigCanvas}
                    canvasProps={{
                        width: 320, height: 400,
                        className: 'sigCanvas'
                    }}
                />
                <Buttons>
                    <button onClick={clear}>clear</button>
                    <button onClick={save}>save</button>
                </Buttons>
            </Popup>
        </Container>
    );
}
