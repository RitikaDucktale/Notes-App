import sidebarImg from "../../assets/sidebarImg.png";
import styles from "./Footer.module.css"
const Footer = ()=>{
    return(
        <div className={styles.footer}>
            <img src={sidebarImg} alt="" />
        </div>
    )
}

export default Footer;