const MyProps = ({nome, idade, curso}) => {
    return (
        <div>
            <h1>O meu nome é: {nome}</h1>
            <h1>A minha idade: {idade}</h1>
            <h1>Meu curso: {curso}</h1>
        </div>
    )
}

export default MyProps;