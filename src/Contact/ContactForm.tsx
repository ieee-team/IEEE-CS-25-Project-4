import { useState } from "react";
import contact from "../assets/contact.png"


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States (US)",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
  };

  return (
    <div className=" bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-3 gap-8">
        {/* Left Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-4"
        >
          <h2 className="text-xl font-bold">READY TO WORK WITH US</h2>
          <p className="text-sm text-gray-500 mb-4">
            Contact us for all your questions and opinions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">First Name *</label>
              <input
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name *</label>
              <input
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Email Address *</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number (Optional)</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Country / Region *</label>
            <select
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option>United States (US)</option>
              <option>United Kingdom</option>
              <option>Egypt</option>
              <option>France</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Subject (Optional)</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Note about your order, e.g. special note for delivery"
            ></textarea>
          </div>

          <div className="flex items-start gap-2">
            <input
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm">
              I want to receive news and updates once in a while. By submitting, I'm
              agreed to the <a className="text-green-600">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Right Side - Info */}
        <div className="space-y-6 mt-30">
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
              United States (Head Quater)
            </p>
            <p className="text-sm">152 Thatcher Road St, Mahattan, 10463, US</p>
            <p className="text-sm">(+025) 3886 25 16</p>
            <a href="mailto:hello@swattechmart.com" className="text-green-600 text-sm">
              hello@swattechmart.com
            </a>
            <hr className="my-3" />
            <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
              United Kingdom (Branch)
            </p>
            <p className="text-sm">
              12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
            </p>
            <p className="text-sm">(+718) 895-5350</p>
            <a href="mailto:contact@swattechmart.co.uk" className="text-green-600 text-sm">
              contact@swattechmart.co.uk
            </a>
            <div className="flex gap-3 mt-4 text-gray-500">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src={contact}
              alt="Laptop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
