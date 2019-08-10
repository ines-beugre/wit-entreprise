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

class Formations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredFormations: [],
            filtered: [],
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

    filtered = () => {
        const {filters, formations} = this.props;
        let value;
        let filtered = formations;
        const today = moment(Date.now()).format('YYYY-MM-DD');
        let nombreDeChamp;

        filtered = filtered.filter(formation => {
            formation.weight = 0;
            formation.critereFilter = 0;
            nombreDeChamp = 0;

            //tester nom de la formation
            if (filters.search && filters.search.length >= 2 && (formation.name)) {
                nombreDeChamp = nombreDeChamp + 1
                value = filters.search.split(" ");

                value.forEach(value => {
                    if (value) {
                        formation.critereFilter = formation.critereFilter + 1
                        if (formation.name.toUpperCase().includes(value.toUpperCase())) {
                            formation.weight = formation.weight + 1
                        }

                        if (formation.theme.toUpperCase().includes(value.toUpperCase())) {
                            formation.weight = formation.weight + 1
                        }

                        if (formation.formers && formation.formers.length > 0) {
                            formation.formers.map(former => {
                                if (former.firstname && former.firstname.toUpperCase().includes(value.toUpperCase())) {
                                    formation.weight = formation.weight + 1;
                                }
                            })
                        }
                    }
                });
            }

            if (nombreDeChamp === 0) {
                return (formation.weight) || !value
            } else {

                return ((formation.critereFilter === formation.weight) && formation.weight !== 0)
            }
        });

        filtered = filtered.filter(formation => formation.date > today)
            .sort(function (a, b) {
                return !a.name ? 1 : !b.name ? -1 : a.name.toString().localeCompare(b.name);
            })

        return filtered;
    };

    render() {
        const {isPending, filters} = this.props;
        const filteredFormations = this.filtered();

        return (
            <div className="formations">
                <h1>Liste de formations à venir</h1>

                <div className="seach-bar">
                    <div className="div-search">
                        <input
                            id="input-search"
                            className="input-search" type="text"
                            placeholder="Nom, theme, formateur"
                            name="search"
                            value={filters.search}
                            onChange={this.handleSearch}
                        />
                    </div>
                </div>


                <div className="liste-formations">

                    {
                        isPending ?
                            <IsPending className="formations-pending"/> :
                            filteredFormations ?
                                filteredFormations.map((formation) => <LigneFormation key={formation.id}
                                                                                      formation={formation}/>)
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