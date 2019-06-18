import React from 'react';
import {connect} from 'react-redux';
import {getFormation, getFormations} from "../../redux/formations/dispatch";
import IsPending from "../isPending/isPending";
import './formation.css'

class Formation extends React.Component {

    componentDidMount() {
        this.props.dispatch(getFormation(this.props.match.params.id));
    }

    render() {
        const {formation, isPending} = this.props;
        return(
          <div className="formation-container">
              formation unique
              {
                  isPending ?
                  <IsPending className="formations-pending"/>
                  :
                      <div className="formation">
                          <div className="formation-image">
                              <img src = {formation.image}/>
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
