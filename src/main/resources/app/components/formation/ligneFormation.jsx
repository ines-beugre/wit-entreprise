import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';

const LigneFormation = ({formation}) => {

    return (
        <div key={formation.id} className="ligne-formation">
            <Link to={`/formations/${formation.id}`}>
                {/*<div className="ligne-formation-unique">*/}
                    <div className="formations-image">
                        <img className="image" src={formation.image}/>
                    </div>

                    <div className="formations-content">
                        <div className="formations-name">{formation.name}</div>
                        <div className="formations-date">{formation.date}</div>
                    </div>
                {/*</div>*/}

            </Link>
        </div>
    )
};

export default LigneFormation;
