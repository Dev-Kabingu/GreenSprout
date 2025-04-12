import React from "react";
import { Link } from "react-router-dom";
import { HandHeart, ShoppingCart, Users } from "lucide-react";

const HelpCard = ({ icon: Icon, title, description, link, linkText }) => (
  <div className="bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300 group">
    <div className="flex justify-center mb-4">
      <div className="bg-green-100 p-4 rounded-full group-hover:bg-green-700 transition">
        <Icon className="w-8 h-8 text-green-700 group-hover:text-white" />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 mb-6 text-center">{description}</p>
    <div className="text-center">
      <Link
        to={link}
        className="inline-block bg-green-700 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-green-800 transition"
      >
        {linkText}
      </Link>
    </div>
  </div>
);

const HowYouCanHelp = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Section 1: Introduction */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 leading-snug">
          How You Can Help Us Make a Difference
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Support our nursery’s mission to build a greener future. Whether through donations, volunteering, or purchasing plants—your support nurtures not just trees, but a thriving community and ecosystem.
        </p>
      </section>

      {/* Section 2: Ways to Help */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <HelpCard
          icon={ShoppingCart}
          title="Purchase Our Plants"
          description="Support us by buying beautiful, eco-friendly plants. Your purchase helps fund growth and sustainability."
          link="/shop"
          linkText="Shop Now"
        />
        <HelpCard
          icon={Users}
          title="Volunteer Your Time"
          description="Join our mission hands-on by volunteering. Help with planting, events, and community engagement."
          link="/contact"
          linkText="Sign Up"
        />
        <HelpCard
          icon={HandHeart}
          title="Donate to Our Cause"
          description="Your donation helps expand our impact, fund materials, and drive environmental education."
          link="/contact"
          linkText="Donate Now"
        />
      </section>

      {/* Section 3: Final CTA */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20 px-6 rounded-2xl overflow-hidden text-center shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make an Impact?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Every act of support brings us one step closer to a sustainable future. Be part of the change today.
        </p>
        <Link
          to="/contact"
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-green-100 transition"
        >
          Get Involved Today
        </Link>
      </section>
    </div>
  );
};

export default HowYouCanHelp;
