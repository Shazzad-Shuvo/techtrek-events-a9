import { useContext, useState } from "react";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [registerError, setRegisterError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        const reEnterPassword = form.get('reenter-password');
        console.log(name, email, password, reEnterPassword);

        setRegisterError('');

        if(password.length < 6){
            setRegisterError('Password must be at least 6 characters long');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[@#$%^&*!])/.test(password)){
            setRegisterError('Password must contain uppercase letter and special character');
            return;
        }

        if (password === reEnterPassword) {
            createUser(email, password)
                .then(result => {
                    console.log(result.user);
                    e.target.reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations!',
                        text: 'Registered successfully!'
                    })

                    // update username and image:
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: image
                    })
                    .then( () => console.log('Profile Updated'))
                    .catch(error =>{
                        console.log(error);
                    })
                })
                .catch(error => {
                    console.error(error);
                    setRegisterError(error.message);
                })
        }
        else{
            setRegisterError('Password did not match');
        }

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen py-10 ">
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl backdrop-blur-3xl mt-6">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='name' placeholder="username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name='image' placeholder="profile image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Re-enter Password</span>
                                </label>
                                <input type="password" name='reenter-password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                {
                                    registerError && <p className="text-red-600 font-semibold">{registerError}</p>
                                }
                            </div>
                            <div>
                                <p>Have an account? <span><Link className="text-blue-700 font-semibold hover:underline" to='/login'>Login</Link> here</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;