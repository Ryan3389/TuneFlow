import Form from "../components/Form"
function LoginPage() {
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
            />
        </section>
    )
}


export default LoginPage