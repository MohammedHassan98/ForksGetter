import React from 'react'

export default function Navbar() {
    return (
        <div className="NavBar">
            <ul className="navItems">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favourites"> Favorites </a>
                </li>
            </ul>
        </div>
    )
}
