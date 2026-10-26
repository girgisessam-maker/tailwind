import { useState } from "react";

export default function About() {

    const [user, setUser] = useState({
    name: "..........",
    age: "....",
    country: "...."
});

const changeDetails = () => {
    let newName = prompt("Enter new name:");
    let newAge = prompt("Enter new age:");
    let newCountry = prompt("Enter new country:");

    let copy = { ...user };
    copy.name = newName;
    copy.age = newAge;
    copy.country = newCountry;
    setUser(copy);
}

const deleteDetails = () => {
    let copy = { ...user };
    copy.name = "..........";
    copy.age = "....";
    copy.country = "....";
    setUser(copy);
}   



    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100  ">
    <table className="table">
        
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        
        <tr>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.country}</td>
            <td>
                <button className="btn btn-primary btn-sm" onClick={changeDetails}>
                    Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={deleteDetails}>Delete</button>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
    )
}
