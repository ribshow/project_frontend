import { useState } from "react";

export const Button = () => {
    const [clicks, setClicks] = useState();

    function countClicks() {
        console.log("button clicado");
        setClicks(clicks + 1);
    }
    return (
        <div>
            <button className="bg-blue text-2xl border border-1" type="submit" onClick={countClicks}>Hello {clicks}</button>
        </div>
    )
}