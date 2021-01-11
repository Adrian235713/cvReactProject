import React from 'react'



const listIteration = (list) => {
    let newList = list.map(x => <div className='skilsList'>{x[0]+' --- '+x[1]}</div>)
    return newList
}

const decontructionContactList = ({emial,phone,city,LinkedIn,GitHub}) => {
    return <>
    <div className='skilsList'><a href={LinkedIn}>LinkedIn</a></div>
    <div className='skilsList'><a href={GitHub}>GitHub</a></div>
    <div className='skilsList'><a href="https://accounts.google.com/">{emial}</a></div>
    <div className='skilsList'>{phone}</div>
    <div className='skilsList'><a href="https://www.google.com/maps/place/Warsaw/@53.7644328,17.3499944,2014686m/data=!3m1!1e3!4m5!3m4!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!8m2!3d52.2296756!4d21.0122287?hl=en-GB">{city}</a></div>
        
    </>
}
const getDecontructionContactList = (list) => {
    let elem = list.map((el) =>  <div> {decontructionContactList(el)}</div>)
    return elem
}

export const MainInformation = () => {
    return (
        <div>
            <h2 className='skilsListHeders'>{contact}</h2>
            <p>{getDecontructionContactList(contactList)}</p>
            <h2 className='skilsListHeders'>{skils}</h2> 
            <p>{listIteration(skilsList)}</p>
            <h2 className='skilsListHeders'>{languages}</h2>
            <p>{listIteration(lungesList)}</p>
            <h2 className='skilsListHeders'>{projects}</h2>
        </div>
    )
}

export default MainInformation

// ------------------------------------------------INFORMATION--------------------------
const contact = 'CONTACT'
const skils = 'SKILLS'
const languages = 'LANGUAGES'
const projects = 'PROJECTS'



const contactList = [{
    emial:'adrianponiatowski24610@gmail.com',
    phone:'883 233 895',
    city:'Warsaw',
    LinkedIn:'https://www.linkedin.com/in/adrianponiatowski/',
    GitHub:'https://github.com/Adrian235713'
}
]


const skilsList = [['HTML5','Mid'],['CSS/SASS','Mid'],['JavaScript','Junior'],['React','Junior'],['Git','Junior']]
const lungesList = [['English','Mid']]
