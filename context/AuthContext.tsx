import { ReactNode, createContext, useState } from "react";


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