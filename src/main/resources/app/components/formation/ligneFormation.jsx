import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const LigneFormation = ({formation}) => {

    return (
        <div key={formation.id} className="ligne-formation">
            <Link to={`/formation/${formation.id}`}>

                <div className="formations-image">
                    <img className="image" src={formation.image}/>
                </div>

                <div className="formations-content">
                    <span className="capitalize">{formation.name}</span>
                </div>

            </Link>
        </div>
    )
};

export default LigneFormation;