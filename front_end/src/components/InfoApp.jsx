import React from 'react'

function InfoApp() {
  return (
    <div style={{height:'250px',backgroundColor:'#318CE7'}} className='info_box'>
        <div style={{width:'60%', textAlign:'center'}}>
            <h1 style={{marginBottom:'1rem'}}> Questions </h1>
            <div style={{marginBottom:'1rem'}}>
                <p> Le forum est ouvert à toutes les questions liées à la programmation.</p>
                <p> (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...) </p>
            </div>
        </div>
        <div style={{width:'90%'}}>
            <input style={{width:'100%', height:'3rem', borderRadius:'.5rem',border:'0px',padding:'1rem',fontSize:'1.5rem'}} type="text" name="" id="" placeholder='Rechercher des questions' />
        </div>
    </div>
  )
}

export default InfoApp