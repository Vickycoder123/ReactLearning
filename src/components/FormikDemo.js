import {Formik, useFormik} from "formik"

export default function FormikDemo(){

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '',
            Subscribe: true
        },
        onSubmit: values => {
            alert(`${values.UserName}\nSubscription: ${(values.Subscribe==true)?"Subscribed":"UnSubscribed"}`);
        }

    })


    return(
        <div className="cobatiner-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" name="Subscribe" onChange={formik.handleChange} checked={formik.values.Subscribe} type="checkbox"  />Yes</dd>
                </dl>
                 <button type="submit">Register</button>
            </form>

            <h2>{formik.values.UserName}</h2>
        </div>
    )
}