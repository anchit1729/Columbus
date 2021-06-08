import React from 'react';


function Home() {
    return (
        <div className='home'>
            <div class='container'>
                <div class='row align-items-center my-5'>
                    <div class='col-lg-7'>
                        <img
                            class='img-fluid rounded mb-4 mb-lg-0'
                            src='./columbus.png'
                            alt='Columbus'
                        />
                    </div>
                    <div class='col-lg-5'>
                        <h1 class='font-weight-light'>Home</h1>
                        <p>
                            Columbus is an attempt to make travel less overwhelming and more enjoyable for people.
                            Like the explorer Chris Columbus, Columbus allows users to simply tell the app where they
                            want to go and for how long, and provides suggestions for things they can do in the specified
                            time frame.
                        </p>
                        <form>
                            <button type='submit' className='btn btn-primary btn-block'>Plan a trip from A to B</button>
                            <button type='submit' className='btn btn-primary btn-block'>Organise your stay at a location</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;