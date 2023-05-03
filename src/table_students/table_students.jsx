import { Component } from "react";
import Record from "../record/record";
import "./table_students.css";
import { Link } from "react-router-dom";

export default class TableStudents extends Component {
    render () {

        const {students, removeStudent ,setUpdateStudent} = this.props;

        let count = 0
        const records = students.map((item) => {
            const {id, ...element} = item;

            return (
                <tr key={id}>
                    <Record count={++count} element={element}/>
                    <td>
                        <Link onClick={() => setUpdateStudent(id)} to="/update_student" className="btn btn-info" style={{marginRight: "1px"}}>Обновление</Link> /
                        <button onClick={() => removeStudent(id)} type="button" className="btn btn-danger" style={{marginLeft: "2px"}}>Удалить</button>
                    </td>
                </tr>
            );
        });

        return (
        <>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Фамилие</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Email</th>
                        <th scope="col">Взаимодействие</th>
                    </tr>
                </thead>
                <tbody>
                    {records}
                </tbody>
            </table>
            <div className="flex_display">
                <Link to='/add_student' className="btn btn-primary">Добавить</Link>
            </div>
        </>
        );
    }
}