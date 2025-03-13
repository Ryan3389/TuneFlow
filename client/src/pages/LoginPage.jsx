import Form from "../components/Form"
import { useState } from "react"
import { LOGIN_USER } from "../utils/mutations"
import { useMutation } from "@apollo/client"
import auth from "../utils/auth"
function LoginPage() {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    const [errorMsg, setErrorMsg] = useState(null)

    const [loginUser, { error, data }] = useMutation(LOGIN_USER)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await loginUser({
                variables: { ...formState }
            })



            if (data && data.login) {
                auth.login(data.login.token)
            }

        } catch (error) {
            setErrorMsg(error)
            console.error("Error logging in: ", error)
        }
    }
    const fields = [
        { name: "email", type: "email", label: "Email", placeholder: "John.Doe@example.com" },
        { name: "password", type: "password", label: "Password", placeholder: "******" }
    ]
    return (
        <section className="form-section">
            <Form
                inputFields={fields}
                submitBtnText="Login"
                redirectText="Don't have an account ? Create Account"
                linkPath="/signup"
                onChange={handleChange}
                formSubmit={handleFormSubmit}
                formData={formState}
            />
        </section>
    )
}


export default LoginPage