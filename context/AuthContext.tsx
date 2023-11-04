import { ReactNode, createContext, useEffect, useState } from "react";


const AuthContext = createContext({
    accessToken: "",
    refreshToken: "",
    isUserSignedIn: false,
    setAccessToken: (token: string) => { },
    setRefreshToken: (token: string) => { },
    setIsUserSignedIn: (option: boolean) => { }
})


export const AuthProvider = function ({ children }: { children: ReactNode }) {
    const [accessToken, setAccessToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    useEffect(() => {
        const refToken = localStorage.getItem("refreshToken");
        if (refToken) {
            setRefreshToken(refToken)
            
            // getUser()
        }
        async function getUser() {

            const response = await fetch('http://localhost:3030/api/profile', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    accessToken: "",
                    refreshToken: refreshToken
                }
            })

            const { success, error, message, data } = await response.json()

            if (success && data) {
                console.log(data)
                return data
            }

            return false
        }
    })



    const auth = {
        accessToken,
        refreshToken,
        isUserSignedIn,
        setAccessToken,
        setRefreshToken,
        setIsUserSignedIn
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext