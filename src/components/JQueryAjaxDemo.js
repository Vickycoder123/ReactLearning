import { useState,useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";

export default function JQueryAjaxDemo(){
    const[users, setUsers] = useState([]);
    const[userError, setUserError] = useState('');

    useEffect(()=>{
        $.ajax({
            method: "GET",
            url: "http://localhost:5000/getusers",
            success: function(response){
                setUsers(response);
            }
        })
    },[])


    const formik = useFormik({
        initialValues :{
            UserId:'',
            UserName:'',
            Password:'',
            Age:0,
            Mobile:'',
            Subscribed:false
        },
        onSubmit: values =>{
            $.ajax({
                method: "POST",
                url: "http://localhost:5000/registeruser",
                data: values
            })
            alert("Registered Successfully");
        }
    })

    function VerifyUserId(e){  
        for(var user of users){
            if(user.UserId == e.target.value){
                setUserError('User ID Taken - Try Another');
                break;
            }else{
                setUserError('User ID Available');
            }
        }
    }


    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onKeyUp={(e)=>VerifyUserId(e)} value={formik.values.UserId} onChange={formik.handleChange} name="UserId" /></dd>
                    <dd>{userError}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dt>Subscription</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.Subscribed} onChange={formik.handleChange} name="Subscribed" /> Yes</dd>

                    <button className="btn btn-primary">Register</button>
                </dl>
            </form>
        </div>
    )
}