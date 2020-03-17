import React from 'react';
import ReactDOM from "react-dom";
const modalRoot = document.querySelector('body');

const Modal  = (props) => {
    return ReactDOM.createPortal(
        props.children,
        modalRoot,
    );
};

export default Modal;