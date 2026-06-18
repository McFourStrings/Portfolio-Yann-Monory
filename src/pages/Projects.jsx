import "../style/global.css"
import avatar from '../assets/avatar-trans-svg.svg'
import photopro from '../assets/photoPro.jpg'
import charizard from '../assets/charizard.png'
import dart from '../assets/dart.jpg'
import escapegame from '../assets/escape-game.jpg'
import escaperoom from '../assets/escape-room.png'
import taverne from '../assets/taverne-pirate.jpg'
import tusmo from '../assets/Tusmo.jpg'
import pdfCV from '../assets/CV-Monory-Yann.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faFigma
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPrint, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { useState } from "react"

const Projects = () => {

    const projets = [
        {
            id: 1,
            nom: "Restaurant Fictif",
            photo: taverne,
            description: "Exercice individuel effectué au début de ma formation de DWWM. L'objectif était de créer un site web en une page pour un restaurant fictif. Le but était de s'exercer à la pratique du HTML, et du CSS, en utilisant les Flexbox.",
            demo: "https://mcfourstrings.github.io/Restaurant-Fictif/",
            git: "https://github.com/McFourStrings/Restaurant-Fictif",
            stacks: ["HTML", "CSS"]
        },
        {
            id: 2,
            nom: "Tusmo",
            photo: tusmo,
            description: "Exercice réalisé dans le cadre de ma formation de DWWM, en groupe de trois. L'objectif était de créer une réplique du jeu TUSMO, inspiré par le célèbre Motus. Le but était de s'exercer à l'utilisation de JavaScript, plus particulièrement la manipulation du DOM, et gestion des évènement côté client.",
            demo: "https://nico59710.github.io/TUSMO/",
            git: "https://github.com/Nico59710/TUSMO",
            stacks: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 3,
            nom: "Escape Game en ligne",
            photo: escapegame,
            description: "Projet personnel réalisé seul en parallèle de ma formation. Je souhaitais mettre en pratique de manière autonome mes compétences alors acquises en HTML, CSS et JavaScript, tout en poussant la pratique de la manipulation du DOM et la gestion des évènements. ",
            demo: "https://mcfourstrings.github.io/Escape-Game/",
            git: "https://github.com/McFourStrings/Escape-Game",
            stacks: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 4,
            nom: "Application de scoring pour jeu de fléchettes",
            photo: dart,
            description: "Exercice réalisé dans le cadre de ma formation de DWWM, en groupe de trois. Il fallait que nous développions une application permettant de compter les scores de deux à quatre joueurs lors d’une partie de jeu de fléchettes. Le but de ce projet était de nous exercer à l’utilisation de React. ",
            demo: "https://mcfourstrings.github.io/Flechettes/",
            git: "https://github.com/McFourStrings/Flechettes",
            stacks: ["CSS", "React"]
        },
        {
            id: 5,
            nom: "Pokedex",
            photo: charizard,
            description: "Pour cet exercice individuel, nous devions créer un Pokedex complet, avec tri selon les génèrations et fonction de recherche. Pour ce faire, il nous fallait créer un projet en React, que nous avons ensuite lié à une API externe (PokeApi).",
            demo: "https://mcfourstrings.github.io/pokedex/",
            git: "https://github.com/McFourStrings/pokedex",
            stacks: ["CSS", "React"]
        },
        {
            id: 6,
            nom: "Escape Rooms",
            photo: escaperoom,
            description: "Projet réalisé en groupe de cinq, qui fut notre premier développement full-stack. Je fus pour ma part dans l’équipe BackEnd, en charge de la création de l’API. Une fois l’API terminée, avec l’équipe FrontEnd qui avait terminé l’interface utilisateur, nous nous sommes répartit les tâches afin de lier l’API au FrontEnd.",
            demo: "",
            git: "https://github.com/gitdreadeurz/Escape-games-project",
            stacks: ["CSS", "NodeJS", "SQL", "React"]
        }
    ];

    const [showCV, setShowCV] = useState(false)

    return (
        <div className="projects">
            <div className="intro">
                <div className="presentation">
                    <div className={`imgPresentation flip-container ${showCV ? 'flipped' : ''}`}>
                        <div className="flipper">
                            <div className="front">
                                <img className="avatar" src={avatar} alt="avatar" />
                            </div>
                            <div className="back">
                                <img className="avatar" src={photopro} alt="Photo Professionelle" />
                            </div>
                        </div>
                    </div>
                    <div className="txtPresentation">
                        <h1 className="name">YANN MONORY</h1>
                        <h2 className="job">Développeur Full Stack</h2>
                    </div>
                </div>
                <div className="stacklist">
                    <p className="stack"><FontAwesomeIcon icon={faHtml5} /> HTML</p>
                    <p className="stack"><FontAwesomeIcon icon={faCss3Alt} /> CSS</p>
                    <p className="stack"><FontAwesomeIcon icon={faJs} /> JavaScript</p>
                    <p className="stack"><FontAwesomeIcon icon={faReact} /> React</p>
                    <p className="stack"> <FontAwesomeIcon icon={faNodeJs} /> NodeJS</p>
                    <p className="stack"> <FontAwesomeIcon icon={faDatabase} /> SQL</p>
                    <p className="stack"><FontAwesomeIcon icon={faFigma} />Figma</p>
                </div>
                <div className="btn">
                    <h3 className="navbtn" onClick={() => { setShowCV(false) }}>Mes Réalisations</h3>
                    <h3 className="navbtn" onClick={() => { setShowCV(true) }}>Mon CV</h3>
                </div>
            </div>

            {!showCV ?
                <div className="carousel-container">
                    <h2 className="section-title">Mes Réalisations</h2>
                    <ProjectCarousel projets={projets} />
                </div> :
                <>


                    <h2 className="section-title">Mon CV</h2>


                    <div className="apropos">
                        <main>
                            <h3 className="titres">A propos</h3>
                            <p>
                                Après 10 ans en tant qu'aide médico psychologique, je me suis
                                réorienté vers le métier de développeur web et web mobile.
                                Assidu, j'aime résoudre des problèmes en apprenant. Appréciant
                                aussi bien le travail en équipe qu'en autonomie, je suis prêt à
                                mettre en oeuvre toutes mes compétences pour le bien de
                                l'entreprise.
                            </p>
                        </main>
                    </div>

                    <div className="cv">
                        <div className="separateur1"></div>

                        <div className="row">
                            <section className="left">
                                <h3 className="titres">Compétences</h3>

                                <div className="competences">
                                    <div className="comptech">
                                        <h4 className="SousTitres">Compétences Techniques</h4>
                                        <ul>
                                            <li>Javascript</li>
                                            <li>Node JS</li>
                                            <li>React</li>
                                            <li>SQL</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Figma</li>
                                            <li>Anglais</li>
                                        </ul>
                                    </div>

                                    <div className="sepvert"></div>

                                    <div className="comptrans">
                                        <h4 className="SousTitres">Compétences Transversales</h4>
                                        <ul>
                                            <li>Travail en équipe</li>
                                            <li>Autonomie</li>
                                            <li>Rigueur</li>
                                            <li>Adaptation</li>
                                            <li>Résolution de problèmes</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="titres">Formations</h3>

                                <h4 className="SousTitres">Janvier 2026 à Aujourd'hui</h4>
                                <li className="dot">
                                    Formation en vu de l'obtention du Titre Professionnel Développeur Web et Web Mobile - ForEach Academy, Wasquehal
                                </li>
                                <li className="dot">
                                    Développement Full stack d'une application web ou web mobile sécurisée
                                </li>

                                <h4 className="SousTitres">Mai 2026</h4>
                                <li className="dot">
                                    Certification CNIL – MOOC RGPD : Maîtrise des principes de protection des données personnelles et de conformité au RGPD.
                                </li>

                                <h4 className="SousTitres">2017</h4>
                                <li className="dot">
                                    Diplome d'Etat d'Aide Médico-Psychologique - Crefo, Valenciennes
                                </li>

                                <h3 className="titres">Expériences</h3>

                                <h4 className="SousTitres">Mai 2019 à Décembre 2025</h4>
                                <ul>
                                    <li>
                                        Titulaire aide médico-psychologique, IME Les Deux Rives de Valenciennes
                                    </li>
                                    <li className="experiences">
                                        → Mise en place d'activités pédagogiques adaptées aux besoins et capacités des enfants
                                    </li>
                                    <li className="experiences">
                                        → Soins de nursing et accompagnement aux actes de la vie quotidienne
                                    </li>
                                    <li className="experiences">
                                        → Travail en équipe pluridisciplinaire
                                    </li>
                                </ul>

                                <h4 className="SousTitres">2017 à 2019</h4>
                                <ul>
                                    <li>
                                        Remplaçant aide médico-psychologique au sein de diverses structures médico-sociales
                                    </li>
                                </ul>
                            </section>

                            <div className="right">
                                <div className="droiterow">
                                    <div className="droite">
                                        <a
                                            href="https://maps.app.goo.gl/bkvKtH2QN1EJAcFNA"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Neuville sur Escaut
                                        </a>
                                    </div>
                                </div>

                                <div className="droiterow">
                                    <div className="droite">
                                        <p>Permis B</p>
                                        <p>Véhiculé</p>
                                    </div>
                                </div>

                                <div className="separateur"></div>

                                <h3 className="titres">Contact</h3>

                                <div className="droiterow">
                                    <div className="droite">
                                        Mail
                                        <p>
                                            <a className="liencontact" href="mailto:yannmonory@gmail.com">
                                                yannmonory@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="droiterow">
                                    <div className="droite">
                                        Téléphone
                                        <p>
                                            <a className="liencontact" href="tel:0664994478">
                                                +33 6 64 99 44 78
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="reseaux">
                                    <h3 className="titres">Liens Pratiques</h3>



                                    <div className="droiterow">
                                        <div className="droite">
                                            <p>
                                                <a
                                                    className="liencontact"
                                                    href="https://github.com/McFourStrings"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="droiterow">
                                        <div className="droite">
                                            <p>
                                                <a
                                                    className="liencontact"
                                                    href="https://www.linkedin.com/in/yann-monory/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Linkedin
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="separateur"></div>

                                <h3 className="titres">Hobbies</h3>

                                <div>
                                    <div className="droiterow">
                                        <div className="droite">Pratique de la musique</div>
                                    </div>
                                    <div className="droiterow">
                                        <div className="droite">Jeux Vidéo</div>
                                    </div>
                                    <div className="droiterow">
                                        <div className="droite">Lecture</div>
                                    </div>
                                    <div className="droiterow">
                                        <div className="droite">Jeu de rôles Grandeur Nature</div>
                                    </div>
                                </div>

                                <div className="boutons">
                                    <div className="droiterow">
                                        <div className="droite">
                                            <a href={pdfCV} download><FontAwesomeIcon icon={faFileArrowDown} /></a>
                                        </div>
                                    </div>

                                    <div className="droiterow">
                                        <div className="droite">
                                            <a
                                                href={pdfCV}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Imprimer le CV"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const w = window.open(pdfCV);
                                                    if (w) setTimeout(() => w.print(), 300);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPrint} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </>

            }
            <div className="copy"> <p>&copy; Yann Monory - 2026</p> </div>
        </div>



    );

}

export default Projects;


