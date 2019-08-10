import React from 'react';
import {connect} from 'react-redux';
import {getFormations} from "../../redux/formations/dispatch";
import IsPending from '../isPending/isPending';
import LigneFormation from '../formation/ligneFormation';
import actions from "../../redux/filters/actions";
import './formations.css';
import moment from "moment";
import 'moment/locale/fr';
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

    handleSearch = (event) => {
        const props = this.props;
        const target = event.target;
        const value = target.value;
        const name = target.name;

        props.dispatch(actions.setFilters({...props.filters, [name]: value}));
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


    render() {
        const {isPending, filters} = this.props;
        const filteredFormations = this.filtersUpcomming();


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