import React from 'react';
import Styles from './Setting.module.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
// import Navbar from '../Pages/Navbar';
import NewNav from '../Navbar/NewNav';

const Setting = () => {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [editID, setEditID] = useState(-1);
    const [editPassword, setEditPassword] = useState();
    const [editUserName, setEditUserName] = useState();
    useEffect(() => {
        axios.get("https://dashboard-3frk.onrender.com/loginData")
            .then(res => {
                console.log(res.data);
                setData(res.data);

            })
    }, []);
   
    const handleEdit = (id) => {
        axios.get("https://dashboard-3frk.onrender.com/loginData/" + id,)
            .then(res => {
                console.log(res.data)
                setUsername(res.data.username);
                setUserPassword(res.data.password);
            })
        setEditID(id);
    }
    const handleEditUserName = (id, username) => {
        axios.get("https://dashboard-3frk.onrender.com/loginData/" + id,)
            .then(res => {
                console.log(res.data)
                setUsername(res.data.username);
                setUserPassword(res.data.password);
            })
        setEditID(id);
        setEditUserName(username);
    }
    const handleEditUserEmail = (id, password) => {
        axios.get("https://dashboard-3frk.onrender.com/loginData/" + id,)
            .then(res => {
                console.log(res.data)
                setUsername(res.data.username);
                setUserPassword(res.data.password);
            })
        setEditID(id);
        setEditPassword(password);
    }
    const handleUpdate = () => {
        axios.put("https://dashboard-3frk.onrender.com/loginData/" + editID, {
            id: editID,
            username: username,
            password: userpassword
        })
            .then(() => {
                window.location.reload()
                setEditID(-1);
            })

    }
    const handleDelete = (id) => {
        axios.delete("https://dashboard-3frk.onrender.com/loginData/" + id,)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            })
    }
    return (
        <>
        {/* <Navbar/> */}
        <NewNav/>
        <section id={Styles.apartment_dashboard}>
            {/* <ul>
                <li className={Styles.li}>
                    <a href="#" className={Styles.apartment_tab}>
                        Login Data
                    </a>
                </li >
                <li className={Styles.li}>
                    <a href="#" className={Styles.content_tab}>
                        Content
                    </a>
                </li>
                <li className={Styles.li}>
                    <a href="#" className={Styles.users_tab}>
                        Users
                    </a>
                </li>
            </ul> */}
            <h3 id={Styles.page_description}>Login Credentials</h3>

            <table>
                <thead>
                    <tr>
                        <th className={Styles.apartment_cell}>ID</th>
                        <th className={Styles.owner_cell}>User Name</th>
                        <th className={Styles.address_cell}>Password</th>
                        <th className={Styles.address_cell}>Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody> */}
                <tbody >
                    {
                        data.map(user => (
                            // user.id === editID ?
                            // <tr key={user.id}>
                            //     <td>{user.id}</td>

                            //     {/* <td>{user.name}</td> */}
                            //     <td><input type="text"   value={username} onChange={e =>(setUsername(e.target.value))}/></td>

                            //     <td><input type="text"  value={userpassword} onChange={e =>(setUserPassword(e.target.value))}/></td>

                            //     <td><button type="button" onClick={handleUpdate}>Update</button></td>

                            // </tr>
                            // :
                            user.id === editID && user.username === editUserName ?
                                <tr key={user.id}>
                                    <td>{user.id}</td>

                                    <td><input type="text" value={username} onChange={e => (setUsername(e.target.value))} className={Styles.edit_input}/></td>
                                    <td>{user.password}</td>

                                    {/* <td><input type="text" value={userpassword} onChange={e => (setUserPassword(e.target.value))} /></td> */}

                                    <td><button type="button" className='btn btn-success' onClick={handleUpdate}>Update</button></td>

                                </tr>
                                : user.id === editID && user.password === editPassword ?
                                    <tr key={user.id}>
                                        <td>{user.id}</td>

                                        <td>{user.username}</td>

                                        <td><input type="text" value={userpassword} onChange={e => (setUserPassword(e.target.value))} className={Styles.edit_input}/></td>

                                        <td><button type="button" className='btn btn-success' onClick={handleUpdate}>Update</button></td>

                                    </tr>
                                    : user.id === editID ?
                                        <tr key={user.id}>
                                            <td>{user.id}</td>

                                            <td><input type={user.text} value={username} onChange={e => (setUsername(e.target.value))} className={Styles.edit_input}/></td>

                                            <td><input type="text" value={userpassword} onChange={e => (setUserPassword(e.target.value))} className={Styles.edit_input}/></td>

                                            <td><button type="button" className='btn btn-success' onClick={handleUpdate}>Update</button></td>

                                        </tr>
                                        :
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td onClick={() => handleEditUserName(user.id, user.username)}>{user.username}</td>
                                            <td onClick={() => handleEditUserEmail(user.id, user.password)}>{user.password}</td>
                                            <td>
                                                <button className='btn btn-primary mx-2' type="button" onClick={() => handleEdit(user.id)}>Edit</button>
                                                <button className='btn btn-danger' type="button" onClick={() => handleDelete(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                        ))
                    }
                </tbody>
            </table>

        </section>
        </>

    );
}

export default Setting;
