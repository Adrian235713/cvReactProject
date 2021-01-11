import React from 'react'
import git from './imgRest/git.png'
import linkt from './imgRest/linkt.png'

export const Footer = () => {
    return (
        <>
            <div className='divFooter1'><h2>adrianponiatowski24610@gmail.com</h2></div>
            <div className='divFooter2'><a href="https://github.com/Adrian235713"><img src={git} alt=""/></a></div>
            <div className='divFooter3'><a href="https://www.linkedin.com/in/adrianponiatowski/"><img src={linkt} alt=""/></a></div>
        </>
    )
}


export default Footer
