import React, { useState, useEffect } from 'react';

function TestimonialCard(props) {
    const [userData, setUserData] = useState({ name: '', imageUrl: '' });

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                setUserData({
                    name: `${user.name.first} ${user.name.last}`,
                    imageUrl: user.picture.large
                });
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <article className="testimonial-card">
            <img src={userData.imageUrl} alt={userData.name} />
            <div className="testimonial-card-content">
                <h3>{userData.name}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    );
}

export default TestimonialCard;
