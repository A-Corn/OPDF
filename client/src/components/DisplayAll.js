import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
    const [allFruits, setAllFruits] =useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/fruits")
        .then((res) => {
            console.log(res)
            setAllFruits(res.data)
        })
        .catch((err) => {
            console.log(err.res)
        })
    }, []);

    return (
        <div>
            <header>
                <p>   </p>
                <Link to="/new"> Add a Devil Fruit </Link>
            </header>
            <table class="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Taken</th>
                </tr>
            </thead>
            <tbody>
                {allFruits.map((fruit, index) => {
                    return (
                        <tr key={fruit._id}>
                            <td> {fruit.name}</td>
                            <td> {fruit.type}</td>
                            <td> {fruit.taken}</td>
                            <td>
                                <Link to={`/pet/edit/${fruit._id}`}>Edit Fruit</Link>
                                |
                                <Link to={`/pet/${fruit._id}`}>Edit </Link>
                            </td> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default DisplayAll;