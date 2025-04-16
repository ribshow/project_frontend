import styles from "./Input.module.css";

const Input = ({ type, name, placeholder, value, multiple, text, handleOnChange }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name} className="">{text}</label>
            <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                multiple={multiple}
                onChange={handleOnChange}
                required
            />
        </div>
    )
}

export default Input;