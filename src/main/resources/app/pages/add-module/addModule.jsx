import React, {Component} from 'react';

const defaultModule = {
    name: "",
    startTime: "",
    endTime: "",
    description: "",
}

export default class AddModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            module: defaultModule
        }
    }

    changeInputModule = (e) => {
        let module = this.state.module;
        module[e.currentTarget.name] = e.currentTarget.value;
        this.setState({former: module});
        this.props.changeInputAddModule(module);
    }

    render(){
        const { module } = this.state;

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

                <div className="add-formation-module">
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
                </div>

                <div className="add-formation-module">
                    <label>Description: </label>
                    <input
                        className="module-description"
                        name="module-description"
                        type="text"
                        value={module.description}
                        onChange={this.changeInputModule}
                    />
                </div>

            </div>
        )
    }
}
