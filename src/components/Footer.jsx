import "./Footer.css"
import { BsArrowUpCircleFill } from "react-icons/bs";

function Footer() {
    return (
        <>
            <div class="area__imgVoltar" id="area__imgVoltar">
                <BsArrowUpCircleFill className="img__voltar"/>
            </div>

            <footer>
                <div class="footer__textos">
                    <h2> edsof </h2>
                    <span>&copy;Informática todos os direitos reservados.</span>
                </div>
            </footer>
        </>
    )
}
export default Footer