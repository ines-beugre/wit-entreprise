import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFormations} from "../../redux/formations/dispatch";
import IsPending from '../isPending/isPending';
import './historique.css';
import moment from "moment";
import 'moment/locale/fr';
import LigneFormation from "../formation/ligneFormation";

class Historique extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            filteredFormations: [],
        }
    }

    componentDidMount() {
        this.props.dispatch(getFormations());
    }

    filtersPast = () => {
        const {formations, filters} = this.props;
        const today = moment(Date.now()).format('YYYY-MM-DD');

        let filtered = formations
            .filter(formation => formation.date < today)
            .sort(function (a, b) {
                return !a.name ? 1 : !b.name ? -1 : a.name.toString().localeCompare(b.name);
            })
        return filtered;
    }

    render() {
        const {isPending} = this.props;
        const pastFormations = this.filtersPast();

        return (
            <div className="historique">
                <h2>Liste de formations passées</h2>

                <div className="liste-formations">

                    {
                        isPending ?
                            <IsPending className="formations-pending"/> :
                            pastFormations ?
                                pastFormations.map((formation) => <LigneFormation key={formation.id} formation={formation} />)
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
}
export default connect(mapStateToProps)(Historique);