import Heading from "./Heading";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";

function Homepage() {
  return (
    <div className="homepage">
      <Heading />
      <main>
        <Specials />
        <Testimonials />
      </main>
    </div>
  );
}

export default Homepage;