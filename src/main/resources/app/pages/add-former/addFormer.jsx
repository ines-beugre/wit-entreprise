import React, {Component} from 'react';

const defaultFormer = {
    firstname: "",
    lastname: "",
    job: "",
    email: "",
    phone: "",
}

export default class AddFormer extends Component {

    render() {
        return(
            <div className="add-formation-formers">

                <label>Formateurs: </label>

                <div className="add-formation-former">
                    <label>Nom: </label>
                    <input
                        className="former-lastname"
                        name="former-name"
                        type="text"
                        value={former.lastname}
                        onChange={this.changeInput}
                    />
                </div>
                <div className="add-formation-former">
                    <label>Prénom: </label>
                    <input
                        className="former-firstname"
                        name="former-name"
                        type="text"
                        value={former.firstname}
                        onChange={this.changeInput}
                    />
                </div>

                <div className="add-formation-former">
                    <label>Profession: </label>
                    <input
                        className="former-job"
                        name="former-job"
                        type="text"
                        value={former.job}
                        onChange={this.changeInput}
                    />
                </div>

            </div>
        )
    }
}

