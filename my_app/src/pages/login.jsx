import {  useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import '../App.css'
import useAuth from '../hooks/useAuth';


const Login = () => {
    const API_URL="http://localhost:3001/users"
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg]= useState('')
    useEffect(()=>{
        setErrMsg('')   
    },[user,pwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
      


        try {
            //setup json-server with db.json dataset for testing
            //call API: security concerns to be discussed later in the course
            //in a real API call we shoud use post for security and authentication
            const response = await fetch(`${API_URL}?user=${user}&password=${pwd}`);
            console.log(response)
            const data= await response.json();
            if (data.length > 0) {
                //in a rea API call we wont be needing data[0] 
                const accessToken = data[0].accessToken;
                const roles = data[0].roles;
                setAuth({ user, pwd, roles, accessToken });
                setUser('');
                setPwd('');
                //toast.success('you are logged in!');
                setSuccess(true);
                navigate(from, {replace:true});
            } else{
                setErrMsg('Username or Password is incorrect!');
            }
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else  {
                setErrMsg('Login Failed');
            } 
        };
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                    <Link to='/Home'> Go Home</Link>
                    </p>
                </section>
            ) : (
                <div className='col-5 m-auto'>
                <p  className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
                    <h1 className='title'>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <div className='reg'>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                        <Link to='/Signup'> Sign Up</Link>
                        </span>
                    </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login