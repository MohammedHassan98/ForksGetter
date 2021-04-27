import React from 'react'

const Navbar: React.FunctionComponent = () => {
    return (
        <div className="NavBar">
            <ul className="navItems">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#"> Favorites </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar