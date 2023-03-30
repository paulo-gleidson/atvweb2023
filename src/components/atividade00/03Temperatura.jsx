const Temperatura = ({celsius, f, k}) => {
    const celsiusParaFahrenheit = (celsius) => {
        let tempF = (((9 * celsius) + 160)/5).toFixed(2);
        return tempF;
    }

    const fahrenheithParaCelsius = (f) => {
        let tempC = (((5 * f) - 160)/9).toFixed(2);
        return tempC;
    }

    const kelvin = (k) => {
        let fparaK = (((9 * k) - 2297)/5).toFixed(2);
        let cparaK = (((5 * k) - 1365)/5).toFixed(2);

        let obj = {
            "celsius" : cparaK,
            "fahrenheith" : fparaK,
        }
        
        return (obj)
    }
    let x = kelvin(k);
    return (
        <>
            <h1>A Temperatura {celsius} em Celsius em Fahrenheith é: {celsiusParaFahrenheit(celsius)}</h1>
            <h1>A Temperatura {f} em Fahrenheith em Celsius é: {fahrenheithParaCelsius(f)}</h1>
            <h1>A Temperatura {k} em Kelvin em Celsius e Fahrenheith, respectivamente: {x.celsius} {x.fahrenheith}</h1>
        </>
    )
}
export default Temperatura;