import { Link } from 'react-router-dom';
import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, recusandae laudantium earum dolore ullam culpa.</p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h3>Login</h3>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;