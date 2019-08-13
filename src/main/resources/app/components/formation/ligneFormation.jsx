import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';

const LigneFormation = ({formation}) => {

    return (
        <Link to={`/formations/${formation.id}`}>
            <div key={formation.id} className="ligne-formation">
                <div className="formations-image">
                    <img className="image" src={formation.image}/>
                </div>

                <div className="formations-content">
                    <div className="formations-name">{formation.name}</div>
                    <div className="formations-date">{moment(formation.date).format('DD-MM-YYYY')}</div>

                </div>

            </div>
        </Link>
    )
};

export default LigneFormation;
