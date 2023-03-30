import { Enemy, Hero } from "./03Batalha"
import ft from "../../../assets/heroi.jpg"
import tf from "../../../assets/vilao.jpg"
import styles from "./styles/style.css"

const Arena = () => {
    return (
        <div className={styles}>
            <Hero nome="heroi" img= {ft}/>
            <Enemy nome="vilao" img = {tf}/>    
        </div>
    )
}

export default Arena;