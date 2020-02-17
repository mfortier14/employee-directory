import React, {useState, useEffect} from 'react';

export default function Employees() {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        jobTitle: "",
    }
    );

    // useEffect(() => {
    //   employee.then((res) => {
    //     setEmployee(res);
    //     console.log(employee);
    //   });
    // });


    const employees = [
        {
            firstName: "Michael",
            lastName: "Scott",
            jobTitle: "Scranton Branch Manager"
          },
          {
            firstName: "Dwight",
            lastName: "Schrute",
            jobTitle: "Assistant to the Regional Manager"
          },
          {
            firstName: "Jim",
            lastName: "Halpert",
            jobTitle: "Inside Sales Representative"
          },
          {
            firstName: "Oscar",
            lastName: "Martinez",
            jobTitle: "Accountant"
          },
          {
            firstName: "Pam",
            lastName: "Beesly",
            jobTitle: "Front Desk Receptionist"
          }
        ];


      return (
        <div>

        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Job Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{employees[0].firstName}</td>
      <td>{employees[0].lastName}</td>
      <td>{employees[0].jobTitle}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{employees[1].firstName}</td>
      <td>{employees[1].lastName}</td>
      <td>{employees[1].jobTitle}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{employees[2].firstName}</td>
      <td>{employees[2].lastName}</td>
      <td>{employees[2].jobTitle}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{employees[3].firstName}</td>
      <td>{employees[3].lastName}</td>
      <td>{employees[3].jobTitle}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{employees[4].firstName}</td>
      <td>{employees[4].lastName}</td>
      <td>{employees[4].jobTitle}</td>
    </tr>
  </tbody>
</table>



        <button className="firstName btn-primary">First Name</button>
       <button className="lastName btn-success">Last Name</button>
       <button className="jobTitle btn-danger">Job Title</button>
</div>
    )};

  //   this.setState(({tableData}) => ({
  //     tableData: tableData.slice().sort((employees) => employees.firstName.localeCompare(employees.firstName))
  // }));
