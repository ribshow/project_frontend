function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className="">
            <label htmlFor={name} className="">{text}</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ""}
            >
                <options>Escolha uma opção...</options>
                {
                    options &&
                    options.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))
                }
            </select>
        </div>

    )
}

export default Select;