const ValorImc = (alt, peso) => {
    let resultado = (peso/(alt*alt));
    return resultado;
}

const ResImc = ({alt, peso}) => {
    if(ValorImc(alt, peso) < 18) {
        return (<h3>abaixo do peso</h3>)
    } else if(ValorImc(alt, peso) > 25) {
        return (<h3>acima do peso</h3>)
    } else {
        return (<h3>peso ideal</h3>)
    }
}

export default ResImc;