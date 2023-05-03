import { Component } from "react";

export default class UpdateForm extends Component {
    
    state = {
        first_name: "",
        last_name: "",
        patronymic: "",
        email: ""
    };

    componentDidMount () {
        const {update_student : {last_name}, update_student : {first_name},
        update_student : {patronymic}, update_student : {email}} = this.props;
        this.setState({
            last_name,
            first_name,
            patronymic,
            email
        });
    }

    changeFirstName = ({target : {value}}) => {
        this.setState({
            first_name: value
        })
    }

    changeLastName = ({target : {value}}) => {
        this.setState({
            last_name: value
        })
    }

    changePatronymic = ({target : {value}}) => {
        this.setState({
            patronymic: value
        })
    }

    changeEmail = ({target : {value}}) => {
        this.setState({
            email: value
        })
    }

    onUpdate = (e) => {
        e.preventDefault();
        const {updateStudent} = this.props;
        const {update_student : {id}} = this.props;
        updateStudent(id, this.state);
    }

    render () {
        const {first_name, last_name, patronymic, email} = this.state;
        return (
            <>
                <form className="form-size" onSubmit={this.onUpdate}>
                    <div className="mb-3">
                        <label htmlFor="input-last-name" className="form-label">Фамилие</label>
                        <input type="text" id="input-last-name"
                        onChange={this.changeFirstName} value={first_name}
                        className="form-control" 
                        placeholder="Введите Фамилие"/>
                    </div>
    
                    <div className="mb-3">
                        <label htmlFor="input-first-name">Имя</label>
                        <input type="text" id="input-first-name"
                        onChange={this.changeLastName} value={last_name}
                        className="form-control" 
                        placeholder="Введите Имя"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-patronymic" className="form-label">Отчество</label>
                        <input type="text" id="input-patronymic" 
                        onChange={this.changePatronymic} value={patronymic}
                        className="form-control"
                        placeholder="Введите Отчетсво"/>   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-email" className="form-label">Email</label>
                        <input type="text" id="input-email" 
                        onChange={this.changeEmail} value={email}
                        className="form-control"
                        placeholder="Введите Email"/>
                    </div>
                    <div className="mb-3">
                        <button type="button" onClick={this.onUpdate}
                        className="btn btn-primary">Обновить</button>
                    </div>
                </form>
            </>);
    }
}