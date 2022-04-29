import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import AboutDropdown from '../component/AboutDropdown'
import '../util/About.css'

const About = () => {

  const aboutArr= [{
                    'id':1,
                    'name' : "Fiabilité", 
                    'text' : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." 
                    },
                  {
                    'id': 2,
                    'name' : "Respect",
                    'text' : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                  },
                  {
                    'id': 3,
                    'name' : "Service",
                    'text' : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                  },
                  {
                    'id': 4,
                    'name' : "Sécurité",
                    'text' : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.."
                  }
                  ]

  return (
    <div className='about-wrapper' >
      <Header />
      <Banner />
      <div className='about-container'>

        {aboutArr.map((item) =>{
          return(
            <AboutDropdown  key={item.id} name= {item.name} text={item.text}/>
          )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default About
