import React from 'react'
import Topbar from './components/topbar/topbar'
import Sidebar from './components/sidebar/sidebar'
import Rightbar from './components/rightbar/rightbar'

export default function Layout({ Children }) {
  return (
       <>
            <div className="homeContainer">
                <Sidebar/>
                    <div className="home_main">
                        <Topbar/>
                        {Children}
                    </div>
                <Rightbar/>
            </div>
        </>  
  )
}
