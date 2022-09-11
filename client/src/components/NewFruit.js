import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const NewFruit = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({})
    const [type, setType] = useState("");
    const [subType, setSubType] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [taken, setTaken] = useState("");
    const [awakened, setAwakened] = useState("");
    const [knownUsers, setKnownUsers] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/fruits", {
            name,
            type,
            subType,
            description,
            image,
            taken,
            awakened,
            knownUsers,

        })
            .then((response) => {
                console.log(response);
                navigate("/dashboard");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }


    return (
        <div className="w-full flex items-center justify-center h-screen bg-local"
            style={{ backgroundImage: "https://oakdome.com/k5/file-downloads/images/wanted-poster-background-example-325px.jpg"}}
        >
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
                <div className="mb-4">
                    <h2> Add a new Devil Fruit</h2>
                    <label className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red" for="username" >
                        Fruit Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" 
                    type="text" 
                    placeholder="Name-Name Fruit"
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red" >
                        Fruit Type
                    </label>
                    <select name="type" onChange={(e) => setType(e.target.value)}>
                        <option> Zoan </option>
                        <option> Logica </option>
                        <option> Paramecia </option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Fruit Sub-Type
                    </label>
                    <select name="subType" onChange={(e) => setSubType(e.target.value)}>
                        <option> None </option>
                        <option> Ancient </option>
                        <option> Mythical </option>
                        <option> Artificial </option>
                    </select>
                </div>
                <div className="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red" for="text">
                        Description
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" 
                    type="description" 
                    placeholder="Short description of the Fruit"
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red" for="text">
                        Image
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="image" 
                    type="text" 
                    placeholder="url for fruit image"
                    onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        taken
                    </label>
                    <select name="taken" onChange={(e) => setTaken(e.target.value)}>
                        <option> Unknown </option>
                        <option> Yes </option>
                        <option> No </option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" >
                        Awakened
                    </label>
                    <select name="awakened" onChange={(e) => setAwakened(e.target.value)}>
                        <option> Unknown </option>
                        <option> Yes </option>
                        <option> No </option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="text">
                        Known Users
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="knownUsers"
                        type="text"
                        placeholder="Known users of this fruit"
                        onChange={(e) => setKnownUsers(e.target.value)} />
                </div>
                <div className="flex items-center justify-between space-x-3">
                    <button className="bg-aqua text-black font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Fruit
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm" href="/dashboard">
                        Go Home
                    </a>
                </div>
            </form>
        </div>
    )
}

export default NewFruit;