import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import '../../Section.css'

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

const Technologies = () => {
    return (
        <motion.div 
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}>
            <div className='home__section darkBg'>
                <div className="container">
                    <div className="row home__row" style={{display:'flex', flexDirection: 'row-reverse'}}>
                        <div className="col">
                            <div className="home__text-wrapper">
                                <div className="top-line">
                                Stavba rodinných domov
                                </div>
                                <h1 className='heading'>Technológia</h1>
                                <p className='home__subtitle '>Pri realizovaní stavieb neponechávame veci náhode. Preto používame montovaný stavebný systém od renomovanej medzinárodnej firmy <a href="http://www.lindab.com/sk/pro/pages/default.aspx?redirecttoproorhome=true&i=2685/" target='_blank'>Lindab.</a><br /> 
                                Táto technológia nám umožňuje stavať rýchlo, jednoducho a v akýchkoľvek poveternostných podmienkach. Montovaná technológia využíva ľahkú oceľovú nosnú konštrukciu s výplňou minerálnej tepelnej izolácie. <br /> Ako plášť na fasádu a interér sú za podklad zvolené sádrovlaknité dosky s doplňujúcimi fóliami. Pre naplnenie nízkoenergetického štandardu pridávame z exteriérovej strany ďalšiu tepelnú izoláciu ochránenú kvalitnou silikónovou omietkou.<br/><br/></p>
                                <Link to='/kontakt'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>Kontaktujte nás</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                        <h2>Skladba steny ktorú požívame</h2>

                                    <ol className='customlist'>
                                    <li>Sádrovláknitá doska hrúbka 12,5 mm ( FERMACELL )</li>
                                    <li>Paropriepustná fólia ( JUTAFOL )</li>
                                    <li>Nosná konštrukcia – pozinkovaná oceľ hrúbka 120 mm ( LINDAB )</li>
                                    <li>Akustická minerálna vlna hrúbka 160 mm ( KNAUF Decibel TI140)</li>
                                    <li>Sádrovláknitá doska hrúbka 12,5 mm ( FERMACELL )</li>
                                    <li>Difúzna fólia Lindab Contact Foil 95</li>
                                    <li>Fasádna minerálna vlna hrúbka 100 mm ( KNAUF FKD-S )</li>
                                    <li>Sklotextilná mriežka OMFA / VERTEX 145g</li>
                                    <li>Silikónová omietka BAUMIT AT, PROHET</li>
                                    </ol>
                            {/* <div className="home__img-wrapper">
                                <img src='../../../images/tech.jpg' alt='Alt' className="home__img" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Technologies
