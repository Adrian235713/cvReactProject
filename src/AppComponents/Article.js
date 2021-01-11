import React from 'react'

// ---------------------------------------- Iterion Experiance ------------------------------------
const experienceDeconstruction = ({date,title, where, jobDescription}) => {
    return (
        <div>
        <h2>{date}</h2>
        <p>{title}</p>
        <p>{where}</p>
        <p>{jobDescription}</p>
        </div>
    )
}

const returnExperience = (exp) => {
    let edu = exp.map((x) => <>{experienceDeconstruction(x)}</>)
    return edu
}


const educationDeconstruction = ({date,school,fieldOfStudy,academicTitle}) => {
    return (
        <div>
        <h2>{date}</h2>
        <p>{school}</p>
        <p>{fieldOfStudy}</p>
        <p>{academicTitle}</p>
        </div>
    )
}


const Article = () => {
    return (
        <div className='ArticleAllDiv'>  
            <h1>{CV}</h1>
            <h2>{experienceT}</h2>
            {returnExperience(experience)}
            <h2>{educationT}</h2>
            { education.map((edu)=>{
              return <>{educationDeconstruction(edu)}</>
            })}
        </div>
    )
}

export default Article
// ---------------------------------------- Information ------------------------------------

//-----Experience
let CV = 'CV - ADRIAN PONIATOWSKI'
let experienceT = 'EXPERIENCE'
let educationT = 'EDUCATION'

let experience = [ 
    {date: '09.2019 – obecnie (2 rok)',
    title:'Nauczyciel Informatyki',
    where: 'Szkoła Podstawowa nr 10 im. Marii Konopnickiej w PruszkowiePruszkow',
    jobDescription: 'Przygotowywanie i prowadzenie zajęć dydaktycznych.'
},
    {date: '01.2019 – 12.2019 (1 rok)',
    title:'Nauczyciel Biologii w Technikum',
    where: 'Technikum Spożywczo-Gastronomicznego im. Jana Pawła IIWarszawa',
    jobDescription: 'Przygotowywanie i prowadzenie zajęć dydaktycznych.'
},
    {date: '01.2018 – 12.2018 (1 rok)',
    title:'Konsulat infolinii medycznej',
    where: 'LUX MED Sp. z o.o',
    jobDescription: 'Praca z wymagającymi pacjentami w różnym wieku i staniezdrowia.'
},  
    {date: '01.2017 – 12.2017 (1 rok)',
    title:'Technik laboratoryjny',
    where: 'Instytut Zoologii Polskiej Akademii Nauk - Pracownia technikmolekularnych i biometrycznych',
    jobDescription: 'Przeprowadzenie procedur biologi molekularnej.'
},
]

//-----Education

let education = [
    {
        date:'10.2018 – obecnie (2 rok studiów)',
        school:'Wyższa Szkoła Informatyki Stosowanej i Zarządzania wWarszawie',
        fieldOfStudy: 'Informatyka',
        academicTitle: 'Engineer'
    },
        {
        date:'07.2020 – 08.2020',
        school:'Coders Lab',
        fieldOfStudy: 'Informatyka',
    },
        {
        date:'10.2017 – 12.2018',
        school:'Szkoła Główna Gospodarstwa Wiejskiego w Warszawie SGGW',
        fieldOfStudy: 'Pedagogika nauczycielska',
        academicTitle: 'Studia podyplomowe'
    },
       {
        date:'10.2012 – 06.2017',
        school:'Szkoła Główna Gospodarstwa Wiejskiego w Warszawie SGGW',
        fieldOfStudy: 'Biologia',
        academicTitle: 'Magister'
    },
]

let Projects =[
    {
    }
] 