import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbarlogin from './Navbarlogin';

const Employee = () => {
    var [employeeList, setEmployeeList] = useState([])
    var employeeLink = "https://jsonplaceholder.typicode.com/users";

  useEffect(
    () => {
      getData();
    },[]
  );

  const getData = () => {
    axios.get(employeeLink)
      .then((response) => {
        console.log(response.data);
        setEmployeeList(response.data);
      })
      .catch(
        (error) => {
            console.log("The error in loading data" + error)
        }
      )
  }
    return (
        <div>
        {/* <Navbarlogin/> */}
        <div className='container'>
          <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table class="table table-success table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeList.map(
                        (value, index) => {
                          return <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                          </tr>
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Employee
