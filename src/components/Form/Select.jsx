import styles from "./select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
      <select
        className={styles.select}
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Escolha uma opção...</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
