import React, { useState } from "react";

interface ModalContextProps { modal:boolean, setModal:React.Dispatch<React.SetStateAction<boolean>> }
export const ModalContext = React.createContext({} as ModalContextProps);

const ModalProvider = ({children}:{children:React.ReactNode}) => {
    const [modal, setModal] = useState(false);
    return <ModalContext.Provider value={{modal, setModal}}>{children}</ModalContext.Provider>
}

export default ModalProvider;