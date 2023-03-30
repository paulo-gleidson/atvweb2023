const PlacaMae = ({name, price}) => {
    return (
        <>
            <h2>Placa Mãe</h2>
            <h3>Nome: {name} {price}</h3>
        </>
    )
}

const Memoria = ({name, price}) => {
    return (
        <>
            <h2>Memória</h2>
            <h3>Nome: {name} {price}</h3>
        </>
    )
}

const PlacaDeVideo = ({name, price}) => {
    return (
        <>
            <h2>Placa de vídeo</h2>
            <h3>Nome: {name} {price}</h3>
        </>
    )
}

export {PlacaMae, PlacaDeVideo, Memoria}