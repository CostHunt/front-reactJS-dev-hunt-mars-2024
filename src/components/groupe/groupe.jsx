import React from 'react'
import Layout from '../../Layout'

function Groupe() {
  const Group=()=>{
    return (
      <div>Group</div>
    )
  }
  return (
    <Layout Children={<Group/>}></Layout>
  )
}

export default Groupe