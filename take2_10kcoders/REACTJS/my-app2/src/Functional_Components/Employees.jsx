import React, { useState } from "react";
export const Employees = () => {
    const [Employees, setEmployees] = useState(["Murali", "Krishna", "Ram", "Ravi", "Sampath"])
    return (
        <div>
            <ul>
                {/* {Employees.map((emp) => {
                    return <li key={emp}>{emp}</li>
                })} */}
            </ul>
        </div>
    );
}