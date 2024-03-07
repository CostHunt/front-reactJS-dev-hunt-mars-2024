import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./home.css"

import Layout from "../../Layout"


import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Rightbar from "../../components/rightbar/rightbar"
import Feed from "../../components/feed/feed"
import Groupe from "../../components/groupe/groupe"

function home() {
    const location = useLocation();


    return (
        <Layout Children={<Feed />} />

    )
}

export default home