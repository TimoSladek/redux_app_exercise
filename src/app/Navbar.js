import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <section>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">HOME</Link>
                        <br/>
                        <Link to="/users">Users</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}