import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactDetails from "../../components/contact/ContachDetails";
import GoogleMap from "../../components/contact/GoogleMap";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section
        id="contact-form"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ContactDetails />

          <ContactForm />
        </div>
      </section>

      <GoogleMap />
    </>
  );
};

export default Contact;