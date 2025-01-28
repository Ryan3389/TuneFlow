import { useState } from "react"
import { CREATE_USER } from "../utils/mutations"
import { useMutation } from "@apollo/client"
import Form from "../components/Form"
import auth from "../utils/auth"
function SignupPage() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [createUser, { error, data }] = useMutation(CREATE_USER)

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
            const { data } = await createUser({
                variables: { ...formState }
            })

            if (data && data.createUser) {
                auth.login(data.createUser.token)
            }
        } catch (error) {
            console.error("Error Signing in: ", error)
        }
    }

    const fields = [
        { name: "firstName", type: "text", label: "First Name", placeholder: "John" },
        { name: "lastName", type: "text", label: "Last Name", placeholder: "Doe" },
        { name: "email", type: "email", label: "email", placeholder: "John.Doe@example.com" },
        { name: "password", type: "password", label: "Password", placeholder: "******" }

    ]
    return (
        <section className="form-section">
            <Form
                inputFields={fields}
                submitBtnText="Create Account"
                redirectText="Already have an account ? Login"
                linkPath="/login"
                formSubmit={handleFormSubmit}
                onChange={handleChange}
                formData={formState}
            />

        </section>
    )
}

export default SignupPage