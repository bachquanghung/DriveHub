import React, { useState } from 'react';
import { validator } from 'validator';
import Select from 'react-select'
import {useForm} from 'react-hook-form'
import * as EmailValidator from 'email-validator';
import classNames from "classnames/bind";
import styles from "./ContactForm.module.scss";
const cx = classNames.bind(styles);
const countryOptions=[
    {value:'asgard',label:'Asgard'},
    {value:'scotland',label:'Scotland'}
    ,{value:'usa',label:'Usa'}
]
const ContactForm = ({onSave,user={}}) => {
    const [userData,setUserData]=useState(user)
    const [errors,setErrors]=useState({})
    
    const {name,email,country}=userData

    const validateData=()=>{
        let errors={}

        if(!name){
            errors.name='Name is required'
        }
        if(!EmailValidator.validate(email)){
            errors.email='A valid email is required'
        }
        
        return errors;
    }

    const handleChange=(event)=>{
        event.preventDefault()
        const {name,value}=event.target
        setUserData((prevData)=>({...prevData,[name]:value}))
    }
    
    const handleSelectChange=(option)=>{
       
        setUserData((prevData)=>({...prevData,country:option}))
    }
    const handleSave=()=>{
        const errors=validateData();
        if(Object.keys(errors).length){
            setErrors(errors)
            return;
        }
        
        setErrors({})
        console.log(userData)
        onSave(userData)
    }
    return (
     <div style={{marginTop:'30px'}} className={cx('contact-form')}>
        <div>
            <p style={{marginTop:'20px'}}>Name</p>
            <input name='name' value={name} onChange={handleChange} className={cx('input-field')}></input>
            <div style={{color:'red'}}>{errors.name}</div>
           
        </div>

        <div>
            <p style={{marginTop:'20px'}}>Email</p>
            <input name='email' value={email} onChange={handleChange} className={cx('input-field')}></input>
            <div style={{color:'red'}}>{errors.email}</div>
        </div>

        <div>
            <p style={{marginTop:'20px'}}>Country</p>
           <Select
           value={countryOptions.find(({value})=>value===userData.country)}
           onChange={handleSelectChange}
           options={countryOptions}
           className={cx('select-field')}
           ></Select>
        </div>
        <div style={{marginTop:'12px'}}>
            <button onClick={handleSave}>Save</button>
        </div>

     </div>
    );
};

export default ContactForm;