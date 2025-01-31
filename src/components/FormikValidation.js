import { useFormik } from "formik";

export default function FormikValidation(){

    function VerifyUserDetails(userDetails){
        const errors = {};
        if(userDetails.UserName == ""){
            errors.UserName = "User Name Required";
        } else if(userDetails.UserName.length < 4){
            errors.UserName = "User Name too short";

        }else if(userDetails.UserName.length> 10){
            errors.UserName = "User Name too long";

        }
        if(userDetails.Age==""){
            errors.Age = "Age Required";
        }else if(isNaN(userDetails.Age)){
            errors.Age ="Age is not a number";
        }
        if(userDetails.Email==""){
            errors.Email = "Email Required"
        }else if(userDetails.Email.indexOf("@") <= 2){
            errors.Email = "Invalid Email";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: ''
        },
        validate: VerifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid">

            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name="Age" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input name="Email" onChange={formik.handleChange} type="email" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>

                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}