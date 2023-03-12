import React from 'react';
import Student from './Student';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

let studentsData = [
    {
        id: 1,
        status: true,
        name: "Jonas",
        surname: "Jonaitis",
        birthYear: 2000,
        city: "Vilnius",
        program: "JavaScript",
        group: 1
    },
    {
        id: 2,
        status: true,
        name: "Petras",
        surname: "Petraitis",
        birthYear: 1998,
        city: "Vilnius",
        program: "JavaScript",
        group: 1
    }
];
function Students() {
    const [students, setStudents] = useState(studentsData);
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [birthYearInput, setBirthYearInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [programInput, setProgramInput] = useState('');
    const [groupInput, setGroupInput] = useState('');
    const deleteStudent = (id) => {
        setStudents(students.filter((student) => 
            student.id !== id
        ));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(true){
            let newStudent = {id: students.id +1, status: true, name: nameInput, surname: surnameInput, birthYear: birthYearInput, city: cityInput, program: programInput, group: groupInput};
            setStudents((oldList) => [...oldList, newStudent]);
            setNameInput('');
            setSurnameInput('');
            setBirthYearInput('');
            setCityInput('');
            setProgramInput('');
            setGroupInput('');
        };
    };
    let allStudents = students.map((student) => {
        return (
            <Student key = {uuidv4()} id = {student.id}  status = {student.status} name = {student.name} surname = {student.surname} birthYear = {student.birthYear} city = {student.city} program = {student.program} group = {student.group} deleteStudent = {deleteStudent} />
        );
    });
  return (
    <>
    <p>Add new student:</p>
    <form onSubmit={handleSubmit} >
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Name</span>
            <input onChange = {(e) => setNameInput(e.target.value)} type="text" id = "nameInput" name = "nameInput" value = {nameInput} class="form-control"></input>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Surname</span>
            <input onChange = {(e) => setSurnameInput(e.target.value)} type="text" id = "surnameInput" name = "surnameInput" value={surnameInput} class="form-control"></input>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Birth year</span>
            <input onChange = {(e) => setBirthYearInput(e.target.value)} type="text" id = "birthYearInput" name = "birthYearInput" value={birthYearInput} class="form-control"></input>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">City</span>
            <input onChange = {(e) => setCityInput(e.target.value)} type="text" id = "cityInput" name = "cityInput" value = {cityInput} class="form-control"></input>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Program</span>
            <input onChange = {(e) => setProgramInput(e.target.value)} type="text" id = "programInput" name = "programInput" value={programInput} class="form-control"></input>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Group</span>
            <input onChange = {(e) => setGroupInput(e.target.value)} type="text" id = "groupInput" name = "groupInput" value={groupInput} class="form-control"></input>
        </div>
    </form>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Birth year</th>
                <th scope="col">City</th>
                <th scope="col">Program</th>
                <th scope="col">Group</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody class="table-group-divider">{allStudents}</tbody>
    </table>
    </>
  )
}

export default Students;