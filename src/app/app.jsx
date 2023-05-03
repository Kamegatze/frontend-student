import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../header/header";
import TableStudents from "../table_students";
import { WorkToApi } from "../work-to-api";
import AddForm from "../add-form";
import UpdateForm from "../update-form";
export default class App extends Component {

    work = new WorkToApi();

    constructor() {
        super();
        this.state = {
            students: [],
        }
    }

    componentDidMount() {
        this.addStudents();
    }

    addStudents () {
        this.work.getAllStudent().then((students) =>  
            {
                this.setState({
                    students
                })
            });
    }

    addStudent = (body) => {
        this.work.addStudent(body);
        setTimeout(() => {
            this.addStudents();
        }, 500);
    };

    removeStudent = (id) => {
        const {students} = this.state;
        const body = this.search(students, id);
        this.work.remeoveStudent(body, id);
    }

    search (array, id) {
        const index = array.findIndex((item) => item.id === id);
        const after = array.slice(0, index);
        const before = array.slice(index + 1);
        this.setState({
            students: [...after, ...before]
        });
        
        const finding = array.filter((item) => item.id === id)[0];
        return finding;
    }
    
    setUpdateStudent = (id) => {
        const {students} = this.state;
        const body = students.filter((item) => item.id === id)[0];;
        this.setState({
            update_student: body,
        });
    }

    updateStudent = (id, body) => {
        const {students} = this.state;
        const index = students.findIndex((item) => item.id === id);
        const after = students.slice(0, index);
        const before = students.slice(index + 1);
        this.setState({
            students: [...after, {id, ...body}, ...before],
        })

        this.work.updateStudent(body, id);
    }

    render () {
        const {students, update_student} = this.state

        

        return (<>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<TableStudents students={students}
                    removeStudent={this.removeStudent} setUpdateStudent={this.setUpdateStudent}/>}/>
                    <Route path="add_student" element={<AddForm addStudent={this.addStudent}/>}/>
                    <Route path="update_student" element={<UpdateForm update_student={update_student}
                    updateStudent={this.updateStudent} />}/>
                </Route>
            </Routes>
        </>);
    }
}
