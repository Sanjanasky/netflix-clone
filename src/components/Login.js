import { useEffect, useState } from "react";
import { useNavigate, Link,useLocation } from "react-router-dom";
import { firebaseConfig } from "./firebaseConfig.js";
import { getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
 } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Login = () => {
  const app = initializeApp(firebaseConfig);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExist, setIsUserExist] = useState(false); // [false, () => {}
  const [ isEmailUsed, setIsEmailUsed] = useState(false);
  const [emailvalid, setEmailValid] = useState(true);
  const [passwordvalid, setPasswordValid] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);
  const page = location.pathname === '/login' ? true : false;

  const validation = (fieldName, value) => {
    switch(fieldName) {
      case 'email':
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'password':
        return value.length >= 6;
      default:
        break;
    }
  };
  const ctaClickHandler = (e) => {
    e.preventDefault();
    if(!validation('email', email) || !validation('password', password)){
      setEmailValid(validation('email', email));
      setPasswordValid(validation('password', password));
      return;
    }
   if(page){ signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/dashboard");
        }
      })
      .catch(error => setIsUserExist(true));}
      else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/dashboard");
          }
        })
        .catch(error => console.log(error));
      }

  };
useEffect(() => {
  setIsUserExist(false);
  setIsEmailUsed(false);
},[location]);
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ?'Sign In' : 'Register'}</h1>
        <br />
        <form>
          <input
            className="form-control"
            value={email}
            onChange={emailOnChangeHandler}
            type="email"
            placeholder="Email"/>
            { !emailvalid && <p className="text-danger">Email is invalid/blank</p>}
          <input
            className="form-control"
            value={password}
            onChange={passwordOnChangeHandler}
            type="password"
            placeholder="Password"
          />
          { !passwordvalid && <p className="text-danger">Password is invalid/blank</p>}
          <button className="btn btn-danger btn-block" onClick={ctaClickHandler}>
          {page ?'Sign In' : 'Register'}
          </button>
          <br />
          {
            page && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label  text-white" htmlFor="flexCheckDefault">
              Remember Me
            </label>
          </div>
          }
        </form>
        <br />
        <br />
         { isUserExist && <p className="text-danger">User does not exist | Go for Signup</p> }
         { isEmailUsed && <p className="text-danger">Email already in use | Go for Sign In</p> }
        <div className="login-form-other">
          <div className="login-signup-now">
          {page ?'New to Netflix?' : 'Existing User'} &nbsp;
            <Link className="" to={page ? '/register' : '/login'}>
            {page ?'Sign Up Now' : 'Sign In'}
            </Link>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="back.jpg" alt="" />
    </div>
  );
};

export default Login;

