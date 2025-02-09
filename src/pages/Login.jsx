import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { logInUser, setUser } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    console.log(location);

    const handleForm = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
            <form onSubmit={handleForm} className="card-body">
                <h2 className="text-center font-bold text-3xl">Login Your Account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Login</button>
                </div>
                <div className="text-center py-3">
                    <p className="">
                        Don&apos;t Have An Account? <Link className="text-red-500" to={"/auth/register"}>Register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;