import React, {Component} from 'react';

const defaultFormer = {
    firstname: "",
    lastname: "",
    job: "",
    email: "",
    phone: "",
}

export class AddFormer extends Component {

    render() {
        return (
            <div className="add-former">

                <div className="add-former-label">
                    <label>Formateur(s): </label>
                </div>

                <div className="other">


                    <div className="add-formation-former">
                        <label>Nom: </label>
                        <input
                            className="former-lastname"
                            name="former-name"
                            type="text"

                        />
                    </div>
                    <div className="add-formation-former">
                        <label>Prénom: </label>
                        <input
                            className="former-firstname"
                            name="former-name"
                            type="text"

                        />
                    </div>

                    <div className="add-formation-former">
                        <label>Profession: </label>
                        <input
                            className="former-job"
                            name="former-job"
                            type="text"

                        />
                    </div>
                </div>

            </div>
        )
    }
}

