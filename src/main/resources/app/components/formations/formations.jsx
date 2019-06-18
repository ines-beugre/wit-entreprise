import React from 'react';
import {connect} from 'react-redux';
import {getFormations} from "../../redux/formations/dispatch";
import IsPending from '../isPending/isPending';
import LigneFormation from '../formation/ligneFormation';
import './formations.css';
import '../../index.css'

class Formations extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            filteredFormations: [],
        }
    };

    componentDidMount() {
        this.props.dispatch(getFormations())
    }

    render() {
        const {formations, isPending} = this.props;
        console.log("formations", formations);

        return(
            <div className="formations">
                    <h1>Programme de formations</h1>
                <div className="seach-bar">

                </div>

                <div className="liste-formations">

                    {
                        isPending ?
                            <IsPending className="formations-pending"/> :
                        formations ?
                            formations.map((formation) => <LigneFormation key={formation.id} formation={formation} />)
                            :
                            <span>Aucune résultat!</span>
                    }

                </div>

            </div>


        )
    }

}


const mapStateToProps = (state) => {
    return {
        formations: state.formationsReducer.formations,
        isPending: state.formationsReducer.isPending,
        filters: state.filtersReducer.filters

    }
};

export default connect(mapStateToProps)(Formations);