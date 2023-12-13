import { ReactNode, createContext, useState } from "react";

const NotifyContext = createContext({
    success: false,
    message: "",
    setSuccess: (value: boolean) => { },
    setMessage: (value: string) => { }
})

export const NotifyContextProvider = ({ children }: { children: ReactNode }) => {
    const [success, setSuccess] = useState<boolean>()
    const [message, setMessage] = useState<string>()

    const notification = {
        success,
        message,
        setSuccess,
        setMessage
    }

    return (
        <NotifyContext.Provider value={notification}>
            {children}
        </NotifyContext.Provider>
    )
}

export default NotifyContext