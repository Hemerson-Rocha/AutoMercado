import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container-footer">
            <div className="row-footer">
                {/* <!-- footer col--> */}
                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href=""> nossos serviços </a></li>
                        <li><a href=""> política de privacidade </a></li>
                        <li><a href=""> programa de afiliados</a></li>
                    </ul>
                </div>
                {/* <!--end footer col-->
                <!-- footer col--> */}
                <div className="footer-col">
                    <h4>Obter ajuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Transporte</a></li>
                        <li><a href="#">devoluções</a></li>
                        <li><a href="#">Status De Pedido</a></li>
                        <li><a href="#">Opções De Pagamento</a></li>
                    </ul>
                </div>
                {/* <!--end footer col-->
                <!-- footer col--> */}
                <div className="footer-col">
                    <h4>Loja online</h4>
                    <ul>
                        <li><a href="#">Relógio</a></li>
                        <li><a href="#">Saco</a></li>
                        <li><a href="#">Calçado</a></li>
                        <li><a href="#">Endereço</a></li>
                    </ul>
                </div>
                {/* <!--end footer col-->
                <!-- footer col--> */}
                <div className="footer-col">
                    {/* <h4>Se subescreva!</h4> */}
                    <div className="form-sub">
                        {/* <form> */}
                            {/* <input type="email" placeholder="Digite o seu e-mail" required /> */}
                            
                            {/* <button>subscrever</button> */}
                        {/* </form> */}
                    </div>

                    <div className="medias-socias">
                        {/* <a href="#"> <i className="fa fa-facebook"></i> </a>
                        <a href="#"> <i className="fa fa-instagram"></i> </a>
                        <a href="#"> <i className="fa fa-twitter"></i> </a>
                        <a href="#"> <i className="fa fa-linkedin"></i> </a> */}
                    </div>

                </div>
                {/* <!--end footer col--> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer