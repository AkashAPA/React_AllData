
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Pages/Navbar';



const DynamicForm = () => {
    const [FormInputData, setFormInputData] = useState([]);
    const [formValue, setFormValue] = useState({
      username: '',
      email: '',
      gender: '',
      interests: [],
      country: '',
    });
    const [disable, setDisable] = useState('typing');

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === 'checkbox') {
          const updatedInterests = [...formValue.interests];
          if (checked) {
            updatedInterests.push(value);
          } else {
            const index = updatedInterests.indexOf(value);
            if (index !== -1) {
              updatedInterests.splice(index, 1);
            }
          }
    
          setFormValue({ ...formValue, interests: updatedInterests });
        } else {
          setFormValue({ ...formValue, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Value:', formValue);
        setDisable('submitted');
        // window.location.reload();
      };
    useEffect(() => {
        
            axios.get('https://dashboard-3frk.onrender.com/fields')
                .then((response) => {
                    setFormInputData(response.data);
                })
       

    }, []);


    return (

        <><Navbar/>
            <div>
                <form onSubmit={  handleSubmit} className='Dynamic-form' >
                    <h1> Form </h1>
                    {FormInputData.map(field => (
                        field.type === "text" ?
                            <>
                                <input  type={field.type} name={field.name} placeholder={field.placeholder} required value={formValue.username} onChange={ handleInput}/>
                            </>
                            : field.type === "email" ?
                                <input  type={field.type} name={field.name} placeholder={field.placeholder} required value={formValue.email} onChange={ handleInput}/>
                                :
                                field.type === "radio" ?
                                    <div key={field.name}>
                                        <label className='d-f-label-main'>{field.label}</label>
                                        <br />
                                        {field.options.map(option => (
                                            <label key={option.value} className=''>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={option.value}
                                                    onChange={ handleInput}
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </div>
                                    : field.type === "checkbox" ?
                                        <div key={field.name}>
                                            <label className='d-f-label-main'>{field.label}</label>
                                            <br />
                                            {field.options.map(option => (
                                                <li key={option.value}>
                                                    <label >
                                                        <input type={field.type} name={field.name} value={option.value} onChange={ handleInput}/>
                                                        {option.label}
                                                    </label>
                                                </li>
                                            ))}
                                        </div>
                                        : field.type === "select" ?
                                            <>
                                                <div key={field.name}>
                                                    <label className='d-f-label-main'>{field.label}</label>
                                                    <select name={field.name} value={formValue.status} onChange={ handleInput}>
                                                        {field.options.map(option => (
                                                            <option key={option.value} name={field.name} value={option.value} onChange={ handleInput}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div> <br />
                                            </>

                                            : null

                    ))}
                     <button className="btn btn-lg"
                            disabled={formValue.username.length===0 || 
                                    formValue.email.length===0 || 
                                    formValue.gender.length===0 ||
                                    formValue.interests.length===0 ||
                                    formValue.country.length===0 ||
                                    disable==='submitted'
                            
                            }
                            
                            >Submit</button>
                </form>
            </div>


        </>
    );
}

export default DynamicForm;