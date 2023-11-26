import SignInForm from "@/components/users/signin-form";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";

export interface SignInFormData {
    email: string,
    phone: string,
    password: string
}

interface SignInResponse {
    success: boolean,
    error: string,
    message: string,
    data: { accessToken: string, refreshToken: string }
}

export default function SignIn() {

    const router = useRouter();
    const { isUserSignedIn, setAccessToken, setRefreshToken, setIsUserSignedIn } = useContext(AuthContext);

    function formData(formData: SignInFormData) {
        async function signInApi() {
            const response = await fetch('http://localhost:3030/api/session/create', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const jsonResponse: SignInResponse = await response.json();
            const { success, data, error, message } = jsonResponse
            if (success && data) {
                setAccessToken(data.accessToken);
                setRefreshToken(data.refreshToken);
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);
                setIsUserSignedIn(true);
            }

        } signInApi();
    }

    if (isUserSignedIn) router.push('/')

    return (
        <div className="signin-page">
            <Head>
                <title>ورود به رویداد سیستم</title>
                <meta name="description" content="برای وارد شدن به رویداد سیستم میتوانید به واسطه وارد کردن نام کاربری و رمز عبور در این صفحه وارد شوید." />
            </Head>
            <div className="container">
                <SignInForm formData={formData} />
            </div>
        </div>
    )
}