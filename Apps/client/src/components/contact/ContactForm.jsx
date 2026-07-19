import { useState } from "react";
import { createContact } from "../../services/contact.service";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await createContact(form);

      toast.success(response.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Send Us A Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            sm:py-4
            text-sm
            sm:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            sm:py-4
            text-sm
            sm:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            sm:py-4
            text-sm
            sm:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            sm:py-4
            text-sm
            sm:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          required
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            text-sm
            sm:text-base
            resize-none
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-green-700
            hover:bg-green-800
            text-white
            py-3
            sm:py-4
            rounded-xl
            transition
            font-semibold
            disabled:bg-gray-400
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;