import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className='navigation'>
            <nav class='navbar navbar-expand navbar-light bg-light'>
                <div class='container'>
                    <Link class='navbar-brand' to='/'>
                        Columbus
                    </Link>

                    <div>
                        <ul class='navbar-nav ml-auto'>
                            <li
                                class={`nav-item ${props.location.pathname === '/' ? 'active' : ''
                                    }`}>
                                <Link class='nav-link' to='/'>
                                    Home
                                    <span class='sr-only'>(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item ${props.location.pathname === '/about' ? 'active' : ''
                                    }`}>
                                <Link class='nav-link' to='/about'>
                                    About
                                </Link>
                            </li>
                            <li
                                class={`nav-item ${props.location.pathname === '/login' ? 'active' : ''
                                    }`}>
                                <Link class='nav-link' to='/login'>
                                    Login
                                </Link>
                            </li>
                            <li
                                class={`nav-item ${props.location.pathname === '/register' ? 'active' : ''
                                    }`}>
                                <Link class='nav-link' to='/register'>
                                    Register
                                </Link>
                            </li>
                            <li
                                class={`nav-item ${props.location.pathname === '/stay' ? 'active' : ''
                                    }`}>
                                <Link class='nav-link' to='/stay'>
                                    Stay
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);