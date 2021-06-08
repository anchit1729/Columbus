import React from 'react';

function About() {
    return (
        <div className='about'>
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
                        <h1 class='font-weight-light'>About</h1>
                        <p>
                            Columbus is a pet project that started in the Google Travel and Voice Hackathon 2019.
                            The idea behind it was to make an app that made life easier for users while at the same time
                            integrated some intelligence behind the scenes. Provide a location that you want to explore and
                            Columbus obtains data about nearby points of interest in the vicinity, and as per their names,
                            creates an itinerary that you can use to plan your vacations.<br /><br />

                            Very often, people are confused by the plethora of options available to them when visiting an
                            unknown location. Instead, what Columbus aims to do is cut down on the overwhelming choices, and
                            help you create your itineraries with as little hassle as possible.<br /><br />

                            Note: Columbus is an ongoing project and is still a work in progress.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;