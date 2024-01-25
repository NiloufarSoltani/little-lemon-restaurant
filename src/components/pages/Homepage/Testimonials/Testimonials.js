import TestimonialCard from './TestimonialsCard';

function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
                <TestimonialCard description="This is the best Mediterranean food that I've ever had!" />
                <TestimonialCard description="My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here." />
                <TestimonialCard description="Incredible vegan options and a warm, inviting atmosphere." />
                <TestimonialCard description="A hidden gem! The seafood pasta was absolutely divine." />
                <TestimonialCard description="Lovely staff and an exceptional wine selection." />
                <TestimonialCard description="Their homemade desserts are to die for - a must-try!" />
                <TestimonialCard description="Perfect spot for a date night - romantic and elegant." />
                <TestimonialCard description="The best restaurant in the city. Great food, great service, great ambiance." />
            </section>

        </section>
    );
}

export default Testimonials;