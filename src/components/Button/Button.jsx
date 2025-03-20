import styles from "./Button.module.css";

const Button = ({ children, type, handleOnChange }) => {
    return (
        <div>
            <button className={styles.btn} type={type} onSubmit={handleOnChange}>{children}</button>
        </div>
    )
}

export default Button;