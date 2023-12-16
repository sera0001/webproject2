import React from 'react'
import {useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom'
import apiRequest from '../apiRequest';
const user_regex= /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwd_regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex, you might want to improve it based on your requirements

const API_URL="http://localhost:3001/users"


export default function SIgnup() {


    const userRef = useRef();
    const [email,setEmail]=useState('');
    const [user,setUser]= useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [eFocus, setEFocus] = useState(false);
    const [validName, setvalidName]= useState(false); //is the name correct
    const [nFocus, setnFocus]= useState(false); //focus on the input field

    const [pwd,setPwd]= useState('');
    const [validPass, setvPass]= useState(false); 
    const [passFocus, setpFocus]= useState(false); 

    const [mpwd,setmPwd]= useState('');
    const [vmPass, setvmPass]= useState(false); 
    const [mpfocus, setmpFocus]= useState(false); 
    
    const [errMsg, setErrMsg]= useState('');
    const [success, setSuccess]= useState(false);

   
    useEffect(()=>{
        setvalidName(user_regex.test(user))
    },[user])

    useEffect(() => {
        setValidEmail(emailRegex.test(email));
      }, [email]);
    

    useEffect(()=>{
        console.log(pwd)
        console.log(pwd_regex.test(pwd))
        setvPass(pwd_regex.test(pwd))
        setvmPass(pwd===mpwd)
    },[pwd,mpwd])

  
      

    const handleRegister = async (e) =>
    {
        e.preventDefault();
        const postOption = {
            method:'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({'id':user,'password':pwd})
        };
        try {
            const result = await apiRequest(API_URL, postOption);
            if (result) {
              setErrMsg('Must use a unique username');
            } else {
              setSuccess(true);
            }
          } catch (error) {
            console.error('Error during registration:', error);
            setErrMsg('An error occurred during registration');
          } finally {
            setUser('');
            setEmail('');
            setPwd('');
            setmPwd('');
          }
        };

  return (
    <>   
     {success? (
        <div>
            <h3>Success!</h3>
            <p>Sign in!</p>
        </div>
     ):(
     <div className='col-5 m-auto'>
        <p  className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
        <h3 className="title">Sign Up</h3>
        <form onSubmit={handleRegister}>
            <label htmlFor='username'>Username: </label>
            <input 
                type='text' 
                id='username' 
                required
                value={user}
                autoComplete='off'
                onChange={(e)=>setUser(e.target.value)}
                aria-invalid={validName?'false':'true'}
                aria-describedby='usernote'
                onFocus={()=>setnFocus(true)}
                onBlur={()=>setnFocus(false)}
            />
            <p id='usernote' className={nFocus && user && !validName? "instructions": "offscreen"}>
               4 to 24 characters <br/>
               must begin with a letter <br/>
            </p> 

             <label htmlFor="email">Email: </label>
            <input
              type='email'
              id='email'
              required
              value={email}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={validEmail ? 'false' : 'true'}
              aria-describedby='emailnote'
              onFocus={() => setEFocus(true)}
              onBlur={() => setEFocus(false)}
            />
            <p
              id='emailnote'
              className={eFocus && email && !validEmail ? 'instructions' : 'offscreen'}
            >
              Enter a valid email address <br />
            </p>

            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPass ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setpFocus(true)}
                onBlur={() => setpFocus(false)}
            />
            <p id="pwdnote" className={passFocus && !validPass ? "instructions" : "offscreen"}>
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
            </p>



            <label htmlFor="confirm_pwd">Confirm Password: </label>
            <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setmPwd(e.target.value)}
                value={mpwd}
                required
                aria-invalid={vmPass ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setmpFocus(true)}
                onBlur={() => setmpFocus(false)}
            />
                 




            <p id="confirmnote" className={mpfocus && !vmPass ? "instructions" : "offscreen"}>
                Must match the first password input field.
            </p>
            
           <button disabled={!validName || !validPass || !vmPass ? true : false}>Sign Up</button>


        </form>
        <div className='reg'>
        <p>  Already registered? 
            <br/>
             <span className="line">
                <Link to='/login'> Sign In</Link>
            </span>
        </p>
        </div>
    </div>
     )}
    </>

  )
}