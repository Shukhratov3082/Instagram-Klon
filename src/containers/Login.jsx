import styled from 'styled-components';
import vektor from '../assets/vektor.svg'
import logo from '../assets/Instagram Logo.svg'
import facebook from '../assets/facebook.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API from '../utils/axios';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const reqbody = {
        username: username,
        password: password,
    }

    function Addto() {
        API.post('/auth/login', reqbody)
            .then(res => {
                localStorage.setItem('user-token', res.data)
                console.log("res", res)
                navigate('/home')
            })
            .catch((err) => console.log('xato', err))
    }
    return (
        <Wrapper>
            <Container>
                <Link to="/"><img className='vektor' src={vektor} alt="" /></Link>
                <img className='logo' src={logo} alt="" />

                <div className="input-container">
                    <input onChange={({ target }) => setUsername(target.value)} placeholder='Login' className='text-input' type="text" />
                    <input onChange={({ target }) => setPassword(target.value)} placeholder='Password' className='password-input' type="password" />
                </div>

                <div className="forget-container"><span>Forgot password?</span></div>

                <div><Button onClick={Addto}>Log in</Button></div>

                <div className="facebook-container">
                    <img src={facebook} alt="" />
                    <span>Log in with Facebook</span>
                </div>

                <div className="or-container">
                    <div className="line"></div>
                    <span>OR</span>
                    <div className="line"></div>
                </div>

                <div className="qeustion-container">
                    <p>Don't have an account?<Link className='link' to="/signup"><span> Sign up.</span></Link></p>
                </div>

                <div className="meta-container">
                    <span>Instagram from Meta</span>
                </div>
            </Container>
        </Wrapper>
    );
}

export default Login;
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;

`
const Container = styled.div`
    width: 375px;
    height: 812px;
    background-color: white;
    padding: 24px 16px;
    position: relative;

    .vektor {
        cursor: pointer;
        position: absolute;
        top: 24px;
        left: 16px;
    }

    .logo {
        position: absolute;
        top: 136px;
        left: 50%;
        transform: translate(-50%);
    }

    .input-container {
        margin-top: 224px;

        .text-input {
            margin-bottom: 12px;
        }

        input {
            width: 100%;
            padding: 14px 15px;

            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.15px;
            color: #262626;

            background: #FAFAFA;
            border: 0.5px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;

            ::placeholder {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: -0.15px;
                color: rgba(0, 0, 0, 0.2);
            }
        }
    }

    .forget-container {
        margin-top: 19px;
        margin-bottom: 30px;
        text-align: end;

        span {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            text-align: right;
            letter-spacing: 0.15px;
            color: #3797EF;
            cursor: pointer;
        }
    }

    .facebook-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 37px;

        span {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.15px;
            color: #3797EF;
            cursor: pointer;
        }
    }

    .or-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 41px;

        .line {
            width: 100%;
            height: 1px;
            border: 0.33px solid rgba(0, 0, 0, 0.2);
        }

        span {
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            color: rgba(0, 0, 0, 0.4);
        }
    }

    .qeustion-container {
        margin-top: 41.5px;
        text-align: center;

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: -0.15px;
            color: rgba(0, 0, 0, 0.4);

            span {
                color: #3797EF;
            }
        }
    }

    .meta-container {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translate(-50%);

        span {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01px;
            color: rgba(0, 0, 0, 0.4);
        }
    }

    .link {
        text-decoration: none;
    }
    
`

const Button = styled.button`
    height: 44px;
    width: 100%;
    background: #3797EF;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    color: #FFFFFF;

    &:hover {
        opacity: 0.7;
    }

`;
