import { useContext } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";
import Style from "./modal.module.css";

const Modal = () => {
    const {modal, setModal} = useContext(ModalContext);
    return (
        <>
        {modal &&
        <div className={Style.wrapper}>
            <div className={Style.bg} onClick={() => setModal(false)}>
            </div>
            <div className={Style.modal}>
                <LoginForm></LoginForm>
            </div>
        </div>
        }
        </>
    );
}

export default Modal;