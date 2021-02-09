import { useState } from "react"

const Toggle = ({ tempF }) => {

    const [toggle, setToggle] = useState(false)

    function toggleConversion() {
        setToggle(!toggle)
    }
 
    let cels = (5/9) * (tempF - 32)

    return(
        <>
        {/* <h3 className={toggle? "Fahri":"Centi"}>Temp: {tempF} degrees Fahrenheit</h3> */}

        <h3>Temp: {toggle? tempF : cels } degrees {toggle? "Fahrenheit" : "Celcius"}</h3>
        <button onClick={toggleConversion}>Click to see in Fahrenheit</button>
        </>
    )
}

export default Toggle;