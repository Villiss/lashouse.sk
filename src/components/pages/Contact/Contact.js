import React from 'react'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'

const pageVariants = {
    initial: {
        opacity:0,
        x:'-100vw',
        scale: 0.8
    },
    in: {
        opacity:1,
        x:0,
        scale: 1
    },
    out: {
        opacity:0,
        x: '100vw',
        scale: 1.2
    }
  }
  
  const pageTransition= {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_q6d0s3m', 'template_ql226do', e.target, 'user_7GDQxbhCqcE2KSYfTHdI1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <motion.div 
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}>
            <div className= 'home__section darkBg'>
                <div className="container">
                    <div className="row home__row" style={{display:'flex', flexDirection: 'row-reverse'}}>
                        <div className="col">
                            <div className="home__text-wrapper">
                                <div className="top-line">
                                    KONTAKT
                                </div>
                                <h1 className='heading'>Stavba rodinných domov</h1>
                                    <address className='adresa dark'>
                                    Sídlo:<br/>
                                    L.A.S. HOUSE s.r.o.<br/>
                                    J.Jesenského 9/2<br/>
                                    971 01 Prievidza<br/> <br/>
                                    Predajné miesto:<br/>
                                    Na piesku 6/A<br/>
                                    821 05 Bratislava<br/>
                                    info@lashouse.sk<br/>
                                    +421 918 610 797<br/>
                                    </address>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__img-wrapper">
                                <div className="formular">
                                    <form className="contact-form" onSubmit={sendEmail}>
                                        <label>Predmet</label>
                                        <input type="text" name="predmet" />
                                        <label>Meno a Priezvisko</label>
                                        <input type="text" name="meno" />
                                        <label>Email</label>
                                        <input type="email" name="email" />
                                        <label>Správa</label>
                                        <textarea name="sprava" />
                                        <input type="submit" value="Odoslať" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact