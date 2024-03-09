import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import "./ENI.css"
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


function ENI() {
    const [displayedPoint, setDisplayedPoint] = useState("Your Title");
    const [pointPosition, setPointPosition] = useState(0);
    const [oppositePointPosition, setOppositePointPosition] = useState(100); // Position initiale opposée

    useEffect(() => {
        const forwardInterval = setInterval(() => {
            // Update the pointPosition to create a moving effect
            setPointPosition((prevPosition) => (prevPosition + 1) % 101);
        }, 20);

        const backwardInterval = setInterval(() => {
            // Update the oppositePointPosition to create a moving effect in the opposite direction
            setOppositePointPosition((prevPosition) => (prevPosition - 1 + 101) % 101);
        }, 20);

        return () => {
            clearInterval(forwardInterval);
            clearInterval(backwardInterval);
        };
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    const text = "École Ingénieuse, Pépinière des élites Informaticiennes";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.substring(0, index));
            index++;

            if (index > text.length) {
                clearInterval(intervalId);
            }
        }, 40);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Anta&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap')
            </style>

            <div className="Header" style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.img
                    className="Logo"
                    src={'https://th.bing.com/th/id/OIP.qBpDOeltMhczghWecoF6QgHaHa?rs=1&pid=ImgDetMain'}
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                />
                <Link to='/login'>
                    <Button variant="contained" color='secondary' className="Login" style={{ fontFamily: 'Anta', fontWeight: 'bold', float: "right", marginRight: '2%', marginTop: '1.5%' }} endIcon={<LoginIcon />}>
                        Log in
                    </Button>
                </Link>

                <AnimatePresence>
                    <motion.h1
                        className="Titre"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {displayedText}
                    </motion.h1>
                </AnimatePresence>

                {/* Moving point */}
                <motion.div className='MovingPoint'
                    style={{
                        position: 'absolute',
                        width: '2%',
                        height: '8%',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        bottom: '0',
                        left: `${pointPosition}%`,
                    }}
                />

                {/* Opposite moving point */}
                <motion.div
                    className='MovingPoint'
                    style={{
                        position: 'absolute',
                        width: '2%',
                        height: '8%',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        bottom: '0',
                        left: `${oppositePointPosition}%`,
                    }}
                />

            </div>

            <div className="Body" >

                <motion.div className="ENI" style={{}}>
                    <motion.img
                        initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ marginLeft: '10%' }} className="Sary" src={'https://scontent.ftmm2-1.fna.fbcdn.net/v/t39.30808-6/423864668_3834207256810843_6747611937071594934_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhbVIaZaIr5XmjABYlxXmGBeDpc8DfIDwF4OlzwN8gPC47A083-Hs0XrXBOlNKX0TiYZHJ9ID0is9b77YnrzJJ&_nc_ohc=F6ZVfZnEeEAAX-M-k1E&_nc_ht=scontent.ftmm2-1.fna&oh=00_AfBQtHExQuPN99h29UwYJKL_riVpjeyQQ5o0zwCNC1-T4A&oe=65ECB74E'} />
                    <motion.div className="presentation" style={{ marginLeft: '5%' }}>
                        <motion.h1
                            initial={{ opacity: 0, x: 250 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >L'Ecole Nationale d'Informatique, votre passerelle vers l'avenir de la technologie</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 450 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            className="Descri" style={{ fontSize: '120%' }}>Située au cœur de Fianarantsoa, notre université est dédiée à l'excellence dans l'enseignement
                            de l'informatique et à la formation de professionnels compétents et innovants.
                            L’Ecole Nationale d’Informatique, en abrégé ENI, est un établissement d’enseignement supérieur rattaché
                            académiquement et administrativement à l’Université de Fianarantsoa.</motion.p>
                    </motion.div>
                </motion.div>


                <div className="Academie" style={{ marginBottom: '1%' }}>
                    <div className="presentation" style={{ marginLeft: '13%' }}>
                        <motion.h1
                            initial={{ opacity: 0, x: -250 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >Mention et parcours</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -350 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            className="Descri" style={{ fontSize: '120%' }}>La formation en vue de l’obtention du diplôme de Licence Professionnelle en Informatique a été mise en place à l’ENI avec les trois parcours de formation :<br />
                            ➣ Génie Logiciel et base de Données.<br />
                            ➣ Administration des Système et réseaux.<br />
                            ➣ Informatique Générale.<br />
                            En 2023, une nouvelle mention Intelligence Artificielle (IA) a été ouvert au sein de l’Ecole pour répondre les besoins des entreprises.
                            La formation est destinée aux étudiants titulaires du diplôme de licence (Bac +3) en Mathématiques ou en Statistiques ou en Informatique, etc. La mention IA comporte deux parcours :<br />
                            ➣ Gouvernance et Ingénierie de Données (GID).<br />
                            ➣ Objets connectés et Cybersécurité (OCC).</motion.p>
                    </div>
                    <motion.img
                        initial={{ opacity: 0, x: 350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="Sary" style={{ marginLeft: '3%' }} src={'https://scontent.ftmm2-1.fna.fbcdn.net/v/t39.30808-6/412826079_210191215473792_7726889232085112721_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBZN27SGuVEjTBfRXQKEF2LSswzWgPJREtKzDNaA8lEYOkXIDrlVjwjtWmxA5y-8b1SIKQ8z-Em8G2wo2DPKR7&_nc_ohc=3o0BhDbVEQ8AX-9q8Ns&_nc_ht=scontent.ftmm2-1.fna&oh=00_AfDypUp6wHWwLfzvWBcBzu-pqhMmzXgbYXkXYL7C9bahtw&oe=65ED67A8'} />
                </div>


                <div className="Social" style={{}}>
                    <motion.img
                        initial={{ opacity: 0, x: -350 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ marginLeft: '10%' }} className="Sary" src={'https://scontent.ftmm2-1.fna.fbcdn.net/v/t39.30808-6/428329962_3848679338696968_1476074998042350804_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHxDQeDkNeAxmMJSZNsl6h1YntGj2ZvmxRie0aPZm-bFNSOqwZmTv-xunYzuCG3-HrbML9hKOP8LScw3wy3Sb7d&_nc_ohc=_Pcja7P2AaUAX9Z49fJ&_nc_ht=scontent.ftmm2-1.fna&oh=00_AfBkd4xZuegqtLqXGCS5LerRJiMnEAmeBeHYIc5JqMqD5A&oe=65EDD24E'} />

                    <div className="presentation" style={{ marginLeft: '5%' }}>
                        <motion.h1
                            initial={{ opacity: 0, x: 250 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >Pulsations Vibrantes au Cœur de la Vie Étudiante </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 350 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            className="Descri" style={{ fontSize: '120%' }}>Au-delà des activités académiques formelles, notre campus vibrant est le théâtre d'une variété d'événements sociaux, de rencontres inspirantes et de collaborations interdisciplinaires.
                            Que ce soit lors de conférences, de séminaires ou d'ateliers, les étudiants ont l'occasion de rencontrer des experts du domaine, d'échanger des idées novatrices et de développer des compétences non seulement techniques,
                            mais également des compétences interpersonnelles indispensables dans le monde professionnel.</motion.p>
                    </div>
                </div>
            </div>

            <div className="Contact" ref={ref}>
                <motion.div
                    style={{ marginRight: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                >
                    <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '0%', color: '#EB9F04', fontSize: '110%' }}>
                        <LocationOnIcon style={{ marginRight: '5px', color: '#EB9F04', fontSize: '30px' }} /> Adresse
                    </h4>
                    <p style={{ fontWeight: 'bold', fontSize: '100%' }}>BP 1487 Tanambao Fianarantsoa</p>
                </motion.div>

                <motion.div
                    style={{ marginRight: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '0%', color: '#BD3100', fontSize: '110%' }}>
                        <MailIcon style={{ marginRight: '8px', color: '#BD3100', fontSize: '30px' }} /> Email
                    </h4>
                    <p style={{ fontWeight: 'bold', fontSize: '100%' }}>eni@eni.mg</p>
                </motion.div>

                <motion.div
                    style={{ marginLeft: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '0%', color: '#06668C', fontSize: '110%' }}>
                        <FacebookIcon style={{ marginRight: '7px', color: '#06668C', fontSize: '30px' }} /> Facebook
                    </h4>
                    <p style={{ fontWeight: 'bold', fontSize: '100%' }}>ENI Ofisialy</p>
                </motion.div>

                <motion.div
                    style={{ marginLeft: '2%' }}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '0%', color: '#679436', fontSize: '110%' }}>
                        <PermPhoneMsgIcon style={{ marginRight: '8px', color: '#679436', fontSize: '30px' }} /> Téléphone
                    </h4>
                    <p style={{ fontWeight: 'bold', fontSize: '100%' }}>+261 34 05 733 36</p>
                </motion.div>
            </div>

        </div>
    );
}

export default ENI;
