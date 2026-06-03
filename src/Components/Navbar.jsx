import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar() {
    let [search, setSearch] = useState("")

    let [q, setQ] = useState("Ali")
    let [language, setLanguage] = useState("hi")
    let [searchParams] = useSearchParams()

    let navigate = useNavigate()

    function postSearch(e) {
        e.preventDefault()
        navigate(`/?q=${search}&language=${language}`)
        setSearch("")
    }

    useEffect(() => {
        (() => {
            setQ(searchParams?.get("q") ?? "All")
            setLanguage(searchParams?.get("language") ?? "hi")
        })()
    }, [searchParams])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondry sticky-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`/?qAll&languge=${language}`}>News Papar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/?qAll&languge=${language}`}>All</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Politics&language=${language}`}>Politics</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Education&language=${language}`}>Education</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Crime&language=${language}`}>Crime</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Entertainment&language=${language}`}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Science&language=${language}`}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Technology&language=${language}`}>Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Economics&language=${language}`}>Econmics</Link></li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/?q=Sports&language=${language}`}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Cricket&language=${language}`}>Cricket</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Scores&language=${language}`}>Score</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=india&language=${language}`}>india</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=jokes&language=${language}`}>jokes</Link></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`}>हिन्दी</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=en`}>English</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=es`}>Spanish</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=zh`}>Chinese</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=jp`}>Japanese</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=fr`}>French</Link></li>

                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={postSearch}>
                            <input className="form-control me-2" onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                            {<button className="btn btn-outline-success" type="submit">Search</button>}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
