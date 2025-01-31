import {useNavigate, Link} from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";


export default function IShopRegister(){

    let navigate = useNavigate();
    // function handleButtonClick(){
    //     navigate("/login");
    // }

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
            axios.post("http://localhost:5000/registeruser", values);
            alert("Registered Successfully");
            navigate("/login");
        }
    });

    return (
        <div>
            <h2>Register new user</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" value={formik.values.UserId} onChange={formik.handleChange} name="UserId" /></dd>
                    <dd></dd>
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

                    <button className="btn btn-outline-primary">Register</button>
                </dl>
            </form>
            <Link to="/login">Already have an account?</Link>
            {/* <button className="btn btn-outline-primary" onClick={handleButtonClick}>Go to Login</button> */}
        </div>
    )
}