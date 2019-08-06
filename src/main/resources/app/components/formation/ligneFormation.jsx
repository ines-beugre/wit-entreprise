import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';

const LigneFormation = ({formation}) => {

    return (
        <div key={formation.id} className="ligne-formation">
            <Link to={`/formations/${formation.id}`}>

                <div className="formations-image">
                    <img className="image" src={formation.image}/>
                </div>

                <div className="formations-content">
                    <div className="formations-name">{formation.name}</div>
                </div>

            </Link>
        </div>
    )
};

export default LigneFormation;