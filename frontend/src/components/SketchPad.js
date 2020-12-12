import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'

export default function SketchPad() {
    return (
        <div className="sketchpad">
            <h1>Sketchpad</h1>
            <SignaturePad />
        </div>
    )
}
