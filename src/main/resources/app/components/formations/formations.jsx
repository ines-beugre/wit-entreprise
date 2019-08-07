import React from 'react';
import {connect} from 'react-redux';
import {getFormations} from "../../redux/formations/dispatch";
import IsPending from '../isPending/isPending';
import LigneFormation from '../formation/ligneFormation';
import moment from 'moment';
import 'moment/locale/fr';
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

    filtersUpcomming = () => {
        const {formations} = this.props;
        const today = moment(Date.now()).format('YYYY-MM-DD');

        let filtered = formations
            .filter(formation => formation.date > today)
            .sort(function (a, b) {
                return !a.name ? 1 : !b.name ? -1 : a.name.toString().localeCompare(b.name);
            })
        return filtered;
    }

    filtersPast = () => {
        const {formations} = this.props;
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
        const filteredFormations = this.filtersUpcomming();
        const pastFormations = this.filtersPast();

        return(
            <div className="formations">
                    <h1>Liste de formations à venir</h1>

                <div className="seach-bar">
                    <div className="div-search">
                        <input
                            className="input-search" type="text"
                            name="search"
                            onChange={this.handleSearch}
                            value={filters.search}
                        />
                    </div>
                </div>

                <div className="liste-formations">

                    {
                        isPending ?
                            <IsPending className="formations-pending"/> :
                            filteredFormations ?
                                filteredFormations.map((formation) => <LigneFormation key={formation.id} formation={formation} />)
                            :
                            <span>Aucune résultat!</span>
                    }

                </div>

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
};

export default connect(mapStateToProps)(Formations);