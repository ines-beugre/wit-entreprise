import React, {Component} from 'react';
import formation from "../../components/formation/formation";

const defaultFormer = {
    firstname: "",
    lastname: "",
    job: "",
    email: "",
    phone: "",
}

export class AddFormer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            former: defaultFormer
        }
    }

    changeInputFormer = (e) => {
        let former = this.state.former;
        former[e.currentTarget.name] = e.currentTarget.value;
        this.setState({former: former});
        this.props.changeInputAddFormer(former);
    }

    render() {
        const formation = this.props;
        const { former } = this.state;

        return (
            <div className="add-former">

                <div className="add-former-label">
                    <label>Formateur(s): </label>
                </div>

                <div className="other">
                    {
                        formation.formers && formation.formers.map((former) => {
                            former.lastname
                        })
                    }
                    <div className="add-formation-former">
                        <label htmlFor="lastname">Nom: </label>
                        <input
                            className="former-lastname"
                            name="lastname"
                            type="text"
                            value={former.lastname}
                            onChange={this.changeInputFormer}
                        />
                    </div>
                    <div className="add-formation-former">
                        <label htmlFor="firstname">Prénom: </label>
                        <input
                            className="former-firstname"
                            name="firstname"
                            type="text"
                            value={former.firstname}
                            onChange={this.changeInputFormer}
                        />
                    </div>

                    <div className="add-formation-former">
                        <label htmlFor='job'>Profession: </label>
                        <input
                            className="former-job"
                            name="job"
                            type="text"
                            value={former.job}
                            onChange={this.changeInputFormer}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

