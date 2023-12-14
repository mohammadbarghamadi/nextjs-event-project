import { ReactNode, Suspense, createContext, useEffect, useState } from "react";
import Notification from "@/components/notification";
const NotifyContext = createContext({
    success: false,
    message: "",
    setSuccess: (value: boolean) => { },
    setMessage: (value: string) => { }
})

export const NotifyProvider = ({ children }: { children: ReactNode }) => {
    const [success, setSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

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