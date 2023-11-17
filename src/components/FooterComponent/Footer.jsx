import React from 'react';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/face.svg';
import whatsapp from '../../assets/whataspp.svg';
import twitter from '../../assets/x.svg';



export const Footer = () => {
        return (
            <>
                <div className="footer">
                    <div className="sb_footer section_padding">
                        <div className="container-fluid">
                            <div className="footer-content">
                            <div className="links-column">
                                <h4>Links</h4>
                                <a href="#">Nuestra historia</a>
                                <a href="#">Productos</a>
                                <a href="#">Registrarse</a>
                            </div>
                    
                        <div className="info-column">
                            <h4>Información</h4>
                            <a href="#">Contacto</a>
                            <a href="#">Preguntas frecuentes</a>
                            <a href="#">Términos y condiciones</a>
                        </div>

                        <div className="redes-column">
                            <h4>Redes sociales</h4>
                            <div className='socialmedia'>
                                <a href="#"><img src={instagram} alt="Instagram"/></a>
                                <a href="#"><img src={facebook} alt='Facebook'/></a>
                                <a href="#"><img src={whatsapp} alt='Whatsapp'/></a>
                                <a href="#"><img src={twitter} alt='x'/></a>
                            </div>
                        </div>
                    </div> 
                    </div> 
                    </div>          
            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-credit">
                <p>Desarrollado por Grupo B - Argentina programa</p>
            </div>
                <div className="sb_footer-copyright">
                    <p>©{new Date().getFullYear()}- Todos los derechos reservados</p>
                </div>
            </div>
            
            </div>
    </>
    );
};

export default Footer;
