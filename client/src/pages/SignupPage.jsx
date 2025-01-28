import Form from "../components/Form"
function SignupPage() {
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
            />

        </section>
    )
}

export default SignupPage