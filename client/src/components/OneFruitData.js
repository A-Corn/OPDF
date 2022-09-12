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

    // const deleteHandler = () => {
    //     axios.delete(`http://localhost:8000/api/fruit/${id}`)
    //         .then((res) => {
    //             console.log(res);
    //             console.log(res.data);
    //             navigate("/dashboard")
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return ( 
        <div class="w-full flex items-center justify-center h-screen bg-[url('https://cdnb.artstation.com/p/assets/images/images/043/058/903/large/nailum-art-1-going-merry.jpg?1636187098')] bg-no-repeat bg-cover">
            <div class="container mx-auto py-9 md:py-12 lg:py-24">
                <div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div class="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 class=" text-2xl text-black ">Fruit Name: {oneFruit.name}</h1>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Type: {oneFruit.type}</p>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Sub-Type: {oneFruit.subType}</p>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Description: {oneFruit.description}</p>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Is taken: {oneFruit.taken}</p>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Is Awakened: {oneFruit.awakened}</p>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Known Users: {oneFruit.knownUsers}</p>
                        </div>
                    </div>
                    <div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                        <div class="relative w-1/2">
                            <img src="https://i.ibb.co/gmV2mLr/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" role="img" class="w-full h-full relative hidden lg:block" />
                            <div class="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                                <button class="dark:hover:bg-red dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-red text-xl xl:text-2xl font-medium text-red flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                                    Remove From Encyclopedia
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneFruitData;