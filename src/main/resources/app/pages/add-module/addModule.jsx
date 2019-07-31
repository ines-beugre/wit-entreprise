import React, {Component} from 'react';

const defaultModule = {
    name: "",
    startTime: "",
    endTime: "",
    description: "",
}

export default class AddModule extends Component {

    render(){
        return(
            <div className="add-formation-modules">
                <label>Modules</label>

                <div className="add-formation-module">
                    <label>Nom du module: </label>
                    <input
                        className="module-name"
                        name="name-module"
                        type="text"
                        value={formation.module}
                        onChange={this.changeInput}
                    />
                </div>

                <div className="add-formation-module">
                    <label>Heure de début: </label>
                    <input
                        className="module-hour"
                        name="start-time"
                        type="time"
                        value={module.startTime}
                        onChange={this.changeInput}
                    />
                </div>

                <div className="add-formation-module">
                    <label>Heure de fin: </label>
                    <input
                        className="module-hour"
                        name="end-time"
                        type="time"
                        value={module.endTime}
                        onChange={this.changeInput}
                    />
                </div>

                <div className="add-formation-module">
                    <label>Description: </label>
                    <input
                        className="module-description"
                        name="module-description"
                        type="text"
                        value={module.description}
                        onChange={this.changeInput}
                    />
                </div>

            </div>
        )
    }
}