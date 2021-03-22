import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function AddingAxios() {
    var [employeeList, setEmployeeList] = useState([]);
    var [counter, setCounter] = useState(0);

    useEffect(() => {
        getEmployeeList();
    }, [])

    useEffect(() => {
        debugger;
    })

    useEffect(() => {
        debugger;
    }, [counter])

    useEffect(() => {
        debugger;
    }, [counter, employeeList])

    function addEmployee() {
        var newEmployee = {
            "id":"900",
            "createdAt":"2018-12-03T00:28:30.136Z",
            "name":"Maynard Hilll",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg"
        }

        var newArray = [newEmployee, ...JSON.parse(JSON.stringify(employeeList))];
        setEmployeeList(newArray);
    }

    function getEmployeeList() {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            setEmployeeList(response.data);
        })
    }

    function addCounter() {
        setCounter(counter + 1)
    }

    debugger;

    return (
        <div>
            <h1>Current Counter is: {counter}</h1>
        <input type="button" onClick={addCounter} value="Add To the Counter" /><hr/><br/>
        <input type="button" onClick={addEmployee} value="Add Employee" />
        <h1>Employee List is Givebn Below....</h1>
            {employeeList.map((emp) => {
                return (
                    <div>
                        <h1>Employee Name: {emp.name}</h1>
                        <h1>Employee Id: {emp.id}</h1>
                        <h1>Employee CreatedAt: {emp.createdAt}</h1>
                        <hr/>
                    </div>
                )
            })}
            <input type="button" value="Get Employees" onClick={getEmployeeList} />
        </div>
    )
}