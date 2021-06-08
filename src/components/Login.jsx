import React from 'react';

function Login() {
    return (
        <div className='Login'>
            <div class='container'>
                <form>
                    <h3>Login</h3>

                    <div className='form-group'>
                        <label>Email ID</label>
                        <input type='email' className='form-control' placeholder='Enter Email ID' />
                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' placeholder='Enter Password' />
                    </div>

                    <button type='submit' className='btn btn-primary btn-block'>Enter</button>
                </form>
            </div>
        </div>
    );
}

export default Login;