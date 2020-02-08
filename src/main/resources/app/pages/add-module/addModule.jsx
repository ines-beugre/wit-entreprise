import React, {Component} from 'react';
import TimeField from "react-simple-timefield";

const defaultModule = {
    name: "",
    startTime: "",
    endTime: "",
    description: "",
}

export class AddModule extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            time: '12:34'
        };
        this.onTimeChange = this.onTimeChange.bind(this);
    }

    changeInputModule = (e) => {
        let { module } = this.props;
        module[e.currentTarget.name] = e.currentTarget.value;
        this.props.changeInputAddModule(module, this.props.index);
    }

    handleChangehour = (field, e) => {
        let { module } = this.props;
        let hour = module.startTime;
        this.setState({ [field]: e.target.value })

    }

    onTimeChange(time) {
        this.setState({time});
    }

    render(){
        const { module } = this.props;
        const {time} = this.state;
        console.log('module', module);

        return(
            <div className="add-formation-modules">
                <label>Modules</label>

                <div className="add-formation-module">
                    <label>Nom du module: </label>
                    <input
                        className="module-name"
                        name="name"
                        type="text"
                        value={module.name}
                        onChange={this.changeInputModule}
                    />
                </div>


                <TimeField value={module.value} onChange={this.onTimeChange} />


                {/*<div className="add-formation-module">
                    <label>Heure de début: </label>
                    <input
                        className="module-hour"
                        type="time"
                        name="start-time"
                        value={module.startTime}
                        onChange={e => this.handleChangehour('startTime', e)}
                    />
                </div>*/}

               {/* <div className="add-formation-module">
                    <label>Heure de début: </label>
                    <input
                        className="module-hour"
                        name="start-time"
                        type="time"
                        value={module.startTime}
                        onChange={this.changeInputModule}
                    />
                </div>

                <div className="add-formation-module">
                    <label>Heure de fin: </label>
                    <input
                        className="module-hour"
                        name="end-time"
                        type="time"
                        value={module.endTime}
                        onChange={this.changeInputModule}
                    />
                </div>*/}

             {/*   <div className="add-formation-module">
                    <label>Description: </label>
                    <input
                        className="module-description"
                        name="module-description"
                        type="text"
                        value={module.description}
                        onChange={this.changeInputModule}
                    />
                </div>*/}

            </div>
        )
    }
}
