import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

import './Footer.css'



function Footer() {
    return(
        <section className='footer_body'>

            <div>
                <BsFacebook className='footer_social_icon' size={37}/>
                <BsInstagram className='footer_social_icon' size={37}/>
                <BsTwitter className='footer_social_icon' size={37}/>
            </div>

            <a href='https://github.com/Primatasan' target='_blank' rel="noreferrer">
                <div className='footer_dev'>
                    <BsGithub className='footer_social_icon' size={30} />
                    <p>Desenvolvido por Carlos Sammartin</p>
                </div>
            </a>
        </section>
    )
}

export default Footer