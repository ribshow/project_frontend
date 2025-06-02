import styles from "./Button.module.css";

const Button = ({ children, type, handleOnChange, onClick }) => {
    return (
        <div>
            <button className={styles.btn} onClick={onClick} type={type} onSubmit={handleOnChange}>{children}</button>
        </div>
    )
}

export default Button;