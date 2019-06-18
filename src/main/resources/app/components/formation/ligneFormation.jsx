import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const LigneFormation = ({formation}) => {

    return(
        <div key= {formation.id} className="ligne-formation">
            <div className="formations-image">
                <img className="image" src={formation.image}/>
            </div>

            <div className="formations-content">
                <span className="capitalize">{formation.name}</span>
            </div>
        </div>
    )
};

export default LigneFormation;