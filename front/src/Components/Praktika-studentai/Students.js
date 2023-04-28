import React from 'react';
import Student from './Student';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Students.css';

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
    const [updateStudent, setUpdateStudent] = useState({});
    const [editStudent, setEditStudent] = useState(false);

    const deleteStudent = (id) => {
        setStudents(students.filter((student) =>
            student.id !== id
        ));
    };

    const handleEditStudent = (id) => {
        setEditStudent(true);
        let findStudent = students.find(student => student.id == id);
        setNameInput(findStudent.name);
        setSurnameInput(findStudent.surname);
        setBirthYearInput(findStudent.birthYear);
        setCityInput(findStudent.city);
        setProgramInput(findStudent.program);
        setGroupInput(findStudent.group);
        setUpdateStudent(findStudent);
    };

    function handleUpdateStudent({ id }) {
        const newStudentList = students.map((student) => {
            if (student.id === id) {
                return { id: uuidv4(), status: true, name: nameInput, surname: surnameInput, birthYear: birthYearInput, city: cityInput, program: programInput, group: groupInput }
            }
            return student;
        });
        setStudents(newStudentList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editStudent) {
            let newStudent = { id: uuidv4(), status: true, name: nameInput, surname: surnameInput, birthYear: birthYearInput, city: cityInput, program: programInput, group: groupInput };
            setStudents((oldList) => [...oldList, newStudent]);
            setNameInput('');
            setSurnameInput('');
            setBirthYearInput('');
            setCityInput('');
            setProgramInput('');
            setGroupInput('');
        } else {
            handleUpdateStudent(updateStudent);
            setNameInput('');
            setSurnameInput('');
            setBirthYearInput('');
            setCityInput('');
            setProgramInput('');
            setGroupInput('');
            setEditStudent(false);
        }
    };

    let allStudents = students.map((student) => {
        return (
            <Student key={uuidv4()} id={student.id} status={student.status} name={student.name} surname={student.surname} birthYear={student.birthYear} city={student.city} program={student.program} group={student.group} deleteStudent={deleteStudent} handleEditStudent={handleEditStudent} />
        );
    });
    return (
        <>
            <p>Add new student:</p>
            <form onSubmit={handleSubmit} >
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input onChange={(e) => setNameInput(e.target.value)} type="text" id="nameInput" name="nameInput" value={nameInput} className="form-control"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Surname</span>
                    <input onChange={(e) => setSurnameInput(e.target.value)} type="text" id="surnameInput" name="surnameInput" value={surnameInput} className="form-control"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Birth year</span>
                    <input onChange={(e) => setBirthYearInput(e.target.value)} type="text" id="birthYearInput" name="birthYearInput" value={birthYearInput} className="form-control"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">City</span>
                    <input onChange={(e) => setCityInput(e.target.value)} type="text" id="cityInput" name="cityInput" value={cityInput} className="form-control"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Program</span>
                    <input onChange={(e) => setProgramInput(e.target.value)} type="text" id="programInput" name="programInput" value={programInput} className="form-control"></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Group</span>
                    <input onChange={(e) => setGroupInput(e.target.value)} type="text" id="groupInput" name="groupInput" value={groupInput} className="form-control"></input>
                </div>
                <button onClick={handleSubmit} type="button" className="btn btn-secondary">Submit</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th className="col">Name</th>
                        <th className="col">Surname</th>
                        <th className="col">Birth year</th>
                        <th className="col">City</th>
                        <th className="col">Program</th>
                        <th className="col">Group</th>
                        <th className="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">{allStudents}</tbody>
            </table>
        </>
    )
}

export default Students;