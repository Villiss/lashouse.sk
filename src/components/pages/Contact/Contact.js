import React from 'react'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
import swal from 'sweetalert'

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

    
    

      function odoslane(){
          swal({
              title: 'Výborne.',
              text: 'Ďakujeme za Vašu správu, čoskoro sa Vám ozveme.',
              icon: 'success',
              button: 'Späť',
          })
      }

      function neodoslane(){
          swal({
              title: 'Ups...',
              text: 'Niečo sa pokazilo a správu sa nedalo odoslať.',
              icon: 'error',
              button: 'Späť',
          })
      }

      function nevyplnene(){
          swal({
              title: 'Ups...',
              text: 'Treba vyplniť všetky polia.',
              icon: 'error',
              button: 'Späť',
          })
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
                                    Stavba rodinných domov
                                </div>
                                <h1 className='heading'>Kontakt</h1>
                                    <address className='adresa '>
                                    <h2>Sídlo:</h2>
                                    L.A.S. HOUSE s.r.o.<br/>
                                    J.Jesenského 9/2<br/>
                                    971 01 Prievidza<br/> <br/>
                                    <h2>Predajné miesto:</h2>
                                    Na piesku 6/A<br/>
                                    821 05 Bratislava<br/>
                                    <a href='mailto:info@lashouse.sk'>info@lashouse.sk</a><br/>
                                    <a href='tel:+421 918 610 797'>+421 918 610 797</a><br/>
                                    </address>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__img-wrapper">
                                <div className="formular">
                                    <form className="contact-form" onSubmit={sendEmail}>
                                        <label>Predmet</label>
                                        <input type="text" name="predmet" required />
                                        <label>Meno a Priezvisko</label>
                                        <input type="text" name="meno" required />
                                        <label>Email</label>
                                        <input type="email" name="email" required />
                                        <label>Správa</label>
                                        <textarea name="sprava" required/>
                                        <input type="submit" value="Odoslať"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_q6d0s3m', 'template_ql226do', e.target, 'user_7GDQxbhCqcE2KSYfTHdI1')
          .then(() => {
              odoslane()
          }, () => {
              neodoslane()
          });
          e.target.reset()
      }
    }

export default Contact