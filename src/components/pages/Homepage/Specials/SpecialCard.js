import {Link} from 'react-router-dom';

function SpecialCard(props) {
    // Card component to display a special menu item. It includes
    // - Image of the dish
    // - Name of the dish
    // - Price of the dish
    // - Description of the dish
    // - Button to order the dish
    return (
        <article className="card">
            <img src={props.image} alt="Special Menu Item"></img>
            <section className="card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <Link className="card-button"to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}

export default SpecialCard;