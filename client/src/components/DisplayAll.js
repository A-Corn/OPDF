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
                <Link to="/new/fruit"> Add a Devil Fruit </Link>
            </header>
            <table className="table-auto w-full p-10">
                <thead className="border-b">
                    <tr className="bg-gray-100">
                        <th className="text-left p-4 font-medium">Name</th>
                        <th className="text-left p-4 font-medium">Type</th>
                        <th className="text-left p-4 font-medium">Taken</th>
                        <th className="text-left p-4 font-medium">Awakened</th>
                    </tr>
                </thead>
            <tbody>
                {allFruits.map((fruit, index) => {
                    return (
                        <tr key={fruit._id} className="border-b hover:bg-gray-50">
                            <td className="text-left p-4 font-normal" ><Link to="/fruit/data"> {fruit.name}  </Link></td>
                            <td className="text-left p-4 font-normal"> {fruit.type}</td>
                            <td className="text-left p-4 font-normal"> {fruit.taken}</td> 
                            <td className="text-left p-4 font-normal"> {fruit.awakened}</td> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default DisplayAll;