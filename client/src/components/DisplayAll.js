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
        <div className="bg-[url('https://wallpapermemory.com/uploads/757/one-piece-background-hd-1920x1200-314140.jpg')] bg-no-repeat bg-cover h-full">
            <header>
                <p>   </p>
                <button className="bg-aqua text-white font-bold py-2 px-4 rounded-full float-right"> <Link to="/new/fruit"> Add a Devil Fruit </Link></button>
            </header>
            <table className="table-auto w-full p-10">
                <thead className="border-b">
                    <tr className="bg-gray">
                        <th className="text-left p-4 font-medium text-white">Name</th>
                        <th className="text-left p-4 font-medium text-white">Type</th>
                        <th className="text-left p-4 font-medium text-white">Taken</th>
                        <th className="text-left p-4 font-medium text-white">Awakened</th>
                    </tr>
                </thead>
            <tbody>
                {allFruits.map((fruit, index) => {
                    return (
                        <tr key={fruit._id} className="border-b hover:bg-gray-50">
                            <td className="text-left p-4 font-normal text-white" ><Link to={`/fruit/${fruit._id}`}> {fruit.name}  </Link></td>
                            <td className="text-left p-4 font-normal text-white"> {fruit.type}</td>
                            <td className="text-left p-4 font-normal text-white"> {fruit.taken}</td> 
                            <td className="text-left p-4 font-normal text-white"> {fruit.awakened}</td> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default DisplayAll;