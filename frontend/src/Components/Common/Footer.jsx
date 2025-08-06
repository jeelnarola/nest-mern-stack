import React from "react";
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 pt-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Left Logo Section */}
          <div className="space-y-4">
            <img src={logo} alt="Nest" className="w-52" />
            <p className="leading-relaxed">
              Awesome grocery store website template
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
              <li><strong>Call Us:</strong> (+91) - 540-025-124553</li>
              <li><strong>Email:</strong> sale@Nest.com</li>
              <li><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</li>
            </ul>
          </div>

          {/* Columns */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help Ticket</li>
              <li>Shipping Details</li>
              <li>Compare products</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Corporate</h3>
            <ul className="space-y-2 text-sm">
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Farm Business</li>
              <li>Farm Careers</li>
              <li>Our Suppliers</li>
              <li>Accessibility</li>
              <li>Promotions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular</h3>
            <ul className="space-y-2 text-sm">
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Eggs Substitutes</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Tea & Kombucha</li>
              <li>Cheese</li>
            </ul>
          </div>
        </div>
    </div>

        <hr className="my-10  text-[#3bb77d6e]"/>
<div className="container mx-auto pb-5">
        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-sm items-center">
          <p>© 2024, <span className="font-semibold">Nest</span> - HTML Ecommerce Template. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-600">1900 - 6666</span>
              <span>Working 8:00 - 22:00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-600">1900 - 8888</span>
              <span>24/7 Support Center</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Follow Us</span>
            <div className="flex gap-2">
              <a href="#"><i className="fab fa-facebook w-8 h-8 rounded-full grid place-items-center bg-green-100 text-green-600"></i></a>
              <a href="#"><i className="fab fa-twitter w-8 h-8 rounded-full grid place-items-center bg-green-100 text-green-600"></i></a>
              <a href="#"><i className="fab fa-instagram w-8 h-8 rounded-full grid place-items-center bg-green-100 text-green-600"></i></a>
              <a href="#"><i className="fab fa-pinterest w-8 h-8 rounded-full grid place-items-center bg-green-100 text-green-600"></i></a>
              <a href="#"><i className="fab fa-youtube w-8 h-8 rounded-full grid place-items-center bg-green-100 text-green-600"></i></a>
            </div>
          </div>
        </div>

</div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
