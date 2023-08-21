import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/movie/">
            Movie Finder
            </Link>
        </nav>
        <Outlet />
        </>

    )
}
