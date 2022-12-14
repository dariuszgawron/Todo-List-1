import React, { useEffect, useRef, useState } from 'react';

import './Modal.scss';

const Modal = props => {
    const [active, setActive] = useState(false);
    // const modalRef = useRef(null);

    // const closeModal = () => {
    //     modalRef.current.classList.remove('modal--active');
    // }

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div className={`modal ${active ? 'modal--active' : ''}`} ref={props.modalRef}>
            <div className='modal__content'>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;