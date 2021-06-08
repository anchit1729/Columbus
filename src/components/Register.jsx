import React from 'react';


function Register() {
    return (
        <div className='Register'>
            <div class='container'>
                <form>
                    <h3>Register</h3>

                    <div className='form-group'>
                        <label>Email ID</label>
                        <input type='email' className='form-control' placeholder='Enter Email ID' />
                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' placeholder='Enter Password' />
                    </div>

                    <div className='form-group'>
                        <label>Confirm Password</label>
                        <input type='password' className='form-control' placeholder='Confirm Password' />
                    </div>

                    <button type='submit' className='btn btn-primary btn-block'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;