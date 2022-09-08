import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NewFruit = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({})
    const [type, setType] = useState("");
    const [subType, setSubType] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [taken, setTaken] = useState("");
    const [awakened, setAwakened] = useState("");
    const [knownUsers, setknownUsers] = useState("");

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
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }


    return (
        <div class="container">
            <form>
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="name-name fruit" />
                </label>
            </form>
        </div>
    )
}

export default NewFruit