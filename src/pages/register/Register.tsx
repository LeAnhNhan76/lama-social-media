import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h3>Register</h3>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="text" placeholder="Name"></input>
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Lama Social.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, recusandae laudantium earum dolore ullam culpa.</p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register