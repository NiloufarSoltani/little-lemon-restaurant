// Link to Online Menu
import {Link} from 'react-router-dom';

// Carousel and card components to create the specials section of the homepage.
import SpecialCard from './SpecialCard';

// Images of different dishes.
import GreekSalad from '../../../../assets/plates/greekSalad.jpg';
import Bruschetta from '../../../../assets/plates/bruchetta.svg';
import LemonDessert from '../../../../assets/plates/lemonDessert.jpg';


function Specials() {
    // Specials section of the homepage.
    // Button to redirect to the online menu.
    // Carousel and card components to create the specials section of the homepage.
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <Link className="action-button" to="/menu">Online Menu</Link>
            </article>

            <section className="specials-cards">
                <SpecialCard
                    image={GreekSalad}
                    name="Greek Salad"
                    price="$22.21"
                    description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.Dressed with salt, hot pepper, and olive oil."
                />

                <SpecialCard
                    image={Bruschetta}
                    name="Bruschetta"
                    price="$14.29"
                    description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
                />

                <SpecialCard
                    image={LemonDessert}
                    name="Lemon Dessert"
                    price="$4.55"
                    description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
                />
            </section>
        </section>
    );
}

export default Specials;