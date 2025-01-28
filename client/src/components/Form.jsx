import { Link } from "react-router-dom"
function Form({ inputFields, submitBtnText, redirectText, linkPath, formData, onChange, formSubmit }) {
    return (
        <form onSubmit={formSubmit}>
            {inputFields.map((field, index) => (
                <div key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        // value={formData[field.name] || ""}
                        onChange={onChange}
                    />
                </div>
            ))}
            <Link to={linkPath}>{redirectText}</Link>
            <input type="submit" value={submitBtnText} />
        </form>
    )
}

export default Form
