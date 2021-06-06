import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export const ModalWindow = (props) => {
    const [modalIsOpen,setIsOpen] = useState(true);
    let history = useHistory();

    function closeModal(){
        setIsOpen(false);

        history.goBack();
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn btn-success">close</button>
                {props.children}
            </Modal>
        </>


    )

}
