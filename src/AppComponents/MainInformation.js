import React from 'react'



const listIteration = (list) => {
    let newList = list.map(x => <div className='skilsList'>{x[0]+' --- '+x[1]}</div>)
    return newList
}

const decontructionContactList = ({emial,phone,city}) => {
    return <>
    <div className='skilsList'><a href="https://en.wikipedia.org/wiki/Warsaw">{city}</a></div>
        <div className='skilsList'><a href="https://accounts.google.com/">{emial}</a></div>
        <div className='skilsList'>{phone}</div>
        
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
        </div>
    )
}

export default MainInformation

// ------------------------------------------------INFORMATION--------------------------
const contact = 'CONTACT'
const skils = 'SKILLS'
const languages = 'LANGUAGES'

const contactList = [{
    emial:'adrianponiatowski24610@gmail.com',
    phone:'883 233 895',
    city:'Warsaw'
}
]



const skilsList = [['HTML5','Mid'],['CSS/SASS','Mid'],['JavaScript','Junior'],['React','Junior'],['Git','Junior']]
const lungesList = [['English','Mid']]
