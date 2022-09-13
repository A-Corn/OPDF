import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


const OneFruitData = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneFruit, setOneFruit ] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/fruit/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneFruit(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/fruit/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return ( 
        <div className="w-full flex items-center justify-center h-screen bg-[url('https://cdnb.artstation.com/p/assets/images/images/043/058/903/large/nailum-art-1-going-merry.jpg?1636187098')] bg-no-repeat bg-cover">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className=" text-2xl text-black ">Fruit Name: {oneFruit.name}</h1>
                            <p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Type: {oneFruit.type}</p>
                            <p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Sub-Type: {oneFruit.subType}</p>
                            <p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Description: {oneFruit.description}</p>
                            <p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Is taken: {oneFruit.taken}</p>
                            <p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Is Awakened: {oneFruit.awakened}</p>
                            <p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Known Users: {oneFruit.knownUsers}</p>
                            <button className="bg-water text-white font-bold py-2 px-4 rounded-full"> <Link to="/dashboard"> Go Back </Link> </button>
                            <button className="bg-orange text-black font-bold py-2 px-4 rounded-full m-5"> <Link to={`/fruit/edit/${oneFruit._id}`}> Edit Fruit </Link> </button>
                            <button className="bg-red text-white font-bold py-2 px-4 rounded-full" onClick={deleteHandler}> Remove</button>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                        <div className="relative w-1/2">
                            <img src={oneFruit.image} alt="A lounge sofa" role="img" className="w-full h-full relative hidden lg:block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneFruitData;