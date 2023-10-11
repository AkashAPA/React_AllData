import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../Pages/Navbar';
import LoadingBar from 'react-top-loading-bar'
const Table = () => {
    const [progress, setProgress] = useState(0)
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [uname, setUname] = useState('');
    const [uemail, setUemail] = useState('');
    const [editID, setEditID] = useState(-1);
    const [editEmail, setEditEmail] = useState();
    const [editName, setEditName] = useState();
    useEffect(() => {
        setProgress(100);
        axios.get("https://dashboard-3frk.onrender.com/users")
            .then(res => {
                console.log(res.data);
                setData(res.data);

            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post("https://dashboard-3frk.onrender.com/users", {
            id: id,
            name: name,
            email: email
        })
            .then(() => { window.location.reload() })
            .catch((error) => console.log(error))
    }
    const handleEdit = (id) => {
        axios.get("https://dashboard-3frk.onrender.com/users/" + id,)
            .then(res => {
                console.log(res.data)
                setUname(res.data.name);
                setUemail(res.data.email);
            })
        setEditID(id);
    }
    const handleEditUserName = (id, name) => {
        axios.get("https://dashboard-3frk.onrender.com/users/" + id,)
            .then(res => {
                console.log(res.data)
                setUname(res.data.name);
                setUemail(res.data.email);
            })
        setEditID(id);
        setEditName(name);
    }
    const handleEditUserEmail = (id, email) => {
        axios.get("https://dashboard-3frk.onrender.com/users/" + id,)
            .then(res => {
                console.log(res.data)
                setUname(res.data.name);
                setUemail(res.data.email);
            })
        setEditID(id);
        setEditEmail(email);
    }
    const handleUpdate = () => {
        axios.put("https://dashboard-3frk.onrender.com/users/" + editID, {
            id: editID,
            name: uname,
            email: uemail
        })
            .then(() => {
                window.location.reload()
                setEditID(-1);
            })

    }
    const handleDelete = (id) => {
        axios.delete("https://dashboard-3frk.onrender.com/users/" + id,)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            })
    }
    return (
        <>
        <Navbar />
            <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
            />
            <div>
                <form>
                    <input type="text" placeholder='Enter Your Name' name='name' onChange={e => (setName(e.target.value))} />
                    <input type="email" placeholder='Enter Your Email' name='email' onChange={e => (setEmail(e.target.value))} />
                    <button type='button' className='btn btn-success' onClick={handleSubmit}>Submit</button>
                </form>
            </div>

            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map(user => (
                            // user.id === editID ?
                            // <tr key={user.id}>
                            //     <td>{user.id}</td>

                            //     {/* <td>{user.name}</td> */}
                            //     <td><input type="text"   value={uname} onChange={e =>(setUname(e.target.value))}/></td>

                            //     <td><input type="text"  value={uemail} onChange={e =>(setUemail(e.target.value))}/></td>

                            //     <td><button type="button" onClick={handleUpdate}>Update</button></td>

                            // </tr>
                            // :
                            user.id === editID && user.name === editName ?
                                <tr key={user.id}>
                                    <td>{user.id}</td>

                                    <td><input type="text" value={uname} onChange={e => (setUname(e.target.value))} /></td>
                                    <td>{user.email}</td>

                                    {/* <td><input type="text" value={uemail} onChange={e => (setUemail(e.target.value))} /></td> */}

                                    <td><button type="button" className='btn btn-success' onClick={handleUpdate}>Update</button></td>

                                </tr>
                                : user.id === editID && user.email === editEmail ?
                                    <tr key={user.id}>
                                        <td>{user.id}</td>

                                        <td>{user.name}</td>

                                        <td><input type="text" value={uemail} onChange={e => (setUemail(e.target.value))} /></td>

                                        <td><button type="button" className='btn btn-success' onClick={handleUpdate}>Update</button></td>

                                    </tr>
                                    : user.id === editID ?
                                        <tr key={user.id}>
                                            <td>{user.id}</td>

                                            <td><input type={user.text} value={uname} onChange={e => (setUname(e.target.value))} /></td>

                                            <td><input type="text" value={uemail} onChange={e => (setUemail(e.target.value))} /></td>

                                            <td><button type="button" className='btn btn-success' onClick={handleUpdate}>Update</button></td>

                                        </tr>
                                        :
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td onClick={() => handleEditUserName(user.id, user.name)}>{user.name}</td>
                                            <td onClick={() => handleEditUserEmail(user.id, user.email)}>{user.email}</td>
                                            <td>
                                                <button className='btn btn-primary mx-2' type="button" onClick={() => handleEdit(user.id)}>Edit</button>
                                                <button className='btn btn-danger' type="button" onClick={() => handleDelete(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                        ))
                    }
                </tbody>
            </table >
        </>
    );
}

export default Table;
