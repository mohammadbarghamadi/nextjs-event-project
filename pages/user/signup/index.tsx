import { useState } from "react"
import SignUpForm from "@/components/users/signup-form"
import { useRouter } from "next/router"

export interface SignUpFormData {
    name: string,
    email: string,
    phone: string,
    password: string
}

interface JSONResponse {
    success: boolean,
    message: string,
    data: SignUpFormData,
    error: string
}

export default function SignUp() {

    const router = useRouter();
    const [] = useState();

    function formData(formData: SignUpFormData) {
        async function signUpAPI() {
            const response = await fetch('http://localhost:3030/api/user/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const jsonResponse: JSONResponse = await response.json();
            const { error, message, data: resData, success } = jsonResponse;
            
            if (success && resData) router.push('/user/signin');

            else if (error || message || !success) {
                console.log(error,success,message)
            }

        } signUpAPI();
    }

    return (
        <div className="signup-page">
            <div className="container">
                <SignUpForm formData={formData} />
            </div>
        </div>
    )
}