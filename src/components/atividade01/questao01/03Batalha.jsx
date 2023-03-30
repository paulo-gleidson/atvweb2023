import styles from "./styles/style.css"

const Hero = ({nome, img}) => {
    return (
        <>
            <h1 className="cor">{nome}</h1>
            <img src= {img} height= {300} width= {200}/>
        </>
    )
}

const Enemy = ({nome, img}) => {
    return (
        <>
            <h1>{nome}</h1>
            <img src= {img} height= {300} width= {200}/>
        </>
    )
}

export {Hero, Enemy};