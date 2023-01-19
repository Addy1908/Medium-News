import React from 'react'
import '../css/index.css'

export default function Home() {
  return (
    <>
        <section id="home">
        <h1 className='heading'>Stay curious.</h1>
        <p className='paragraph'>Discover stories,thinking,and expertise</p><br></br>
        <p className='paragraph' style={{marginTop:'-20px'}}>from writers on any topics.  </p>
        <button className='btn-home'>Start Reading</button>
        </section>
    </>
  )
}
