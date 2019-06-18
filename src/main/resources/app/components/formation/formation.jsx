import React from 'react';
import {connect} from 'react-redux';
import {getFormation, getFormations} from "../../redux/formations/dispatch";
import IsPending from "../isPending/isPending";
//import moment from 'moment/locale/fr';
import moment from 'moment';
import './formation.css'

class Formation extends React.Component {

    componentDidMount() {
        this.props.dispatch(getFormation(this.props.match.params.id));
    }

    render() {
        const {formation, isPending} = this.props;

        return(
          <div className="formation-container">
              {/*<h3>Détails</h3>*/}
              {
                  isPending ?
                  <IsPending className="formations-pending"/>
                  :
                      <div className="formation">
                          <div >
                              <div className="formation-theme-date">
                                  <div className="formation-theme">{formation.theme}</div>
                                  <div className="formation-date">{moment(formation.date).locale('fr').format('DD MMMM YYYY')} </div>
                              </div>

                              <img className="formation-image" src = {formation.image}/>
                          </div>


                      </div>
              }
          </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        formation: state.formationsReducer.formation,
        isPending: state.formationsReducer.isPending,
    }
}

export default connect(mapStateToProps)(Formation);
