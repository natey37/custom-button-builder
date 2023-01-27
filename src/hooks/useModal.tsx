import { useState, useCallback, useMemo} from "react"; 

export default function useModal(): { openModal: boolean, handleModal: () => void } {
    const [openModal, setOpenModal] = useState(false)

    const handleModal = (): void => {
        setOpenModal((prev: boolean) => !prev)
    }
    console.log("USEMODAL", openModal)

    return { openModal, handleModal };
}
