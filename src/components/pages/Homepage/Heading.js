import {Link} from 'react-router-dom';
import chef from '../../../assets/restaurant.jpg';

export default function Heading() {
    // Heading include a hero section with the restaurant name, location, and a call to action button to reserve a table.
    // Also it includes an appealing image of the restaurant cuisine.
    return (
        <header>
            <article className="hero-section">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={chef} alt="Little Lemon Appealing Food"></img>
                </section>
            </article>
      </header>
    );
}