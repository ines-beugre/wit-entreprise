import React from 'react';
import {connect} from 'react-redux';
import {getFormation, getFormations} from "../../redux/formations/dispatch";
import IsPending from "../isPending/isPending";
import moment from 'moment';
import 'moment/locale/fr';
import './formation.css'

class Formation extends React.Component {

    componentDidMount() {
        this.props.dispatch(getFormation(this.props.match.params.id));
    }


    render() {
        const {formation, isPending} = this.props;
        const modules = formation.modules;

        return (
            <div className="formation-container">
                {
                    isPending ?
                        <IsPending className="formations-pending"/>
                        :
                        <div className="formation">
                            <div>
                                <div className="formation-theme-date">
                                    <div className="formation-theme">{formation.theme}</div>
                                    <div
                                        className="formation-date">{moment(formation.date).format('DD MMMM YYYY')} </div>
                                </div>
                                <img className="formation-image" src={formation.image}/>

                                <div className="formation-modules">

                                    {
                                        modules &&
                                        modules.map((module) => {

                                            let i = modules.indexOf(module);
                                            return (
                                                <div key={module.id} className="timeline">

                                                    {
                                                        (i % 2) === 0 ?
                                                            <div className="container right">
                                                                <div className="content">
                                                                    <div className="content-hour">
                                                                        <div className="content-start">
                                                                            {moment(module.startTime).format('LT')}
                                                                        </div>

                                                                        <div className="content-end">
                                                                            {moment(module.endTime).format('LT')}
                                                                        </div>
                                                                    </div>

                                                                    <div className="content-name">
                                                                        {module.name}
                                                                    </div>

                                                                </div>
                                                            </div> :

                                                            <div className="container left">
                                                                <div className="content">
                                                                    <div className="content-hour">
                                                                        <div className="content-start">
                                                                            {moment(module.startTime).format('LT')}
                                                                        </div>

                                                                        <div className="content-end">
                                                                            {moment(module.endTime).format('LT')}
                                                                        </div>
                                                                    </div>

                                                                    <div className="content-name">
                                                                        {module.name}
                                                                    </div>

                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }

                                </div>
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
