const ContactHero = () => {
  return (
    <section
      className="
        relative
        min-h-[60vh]
        sm:min-h-[65vh]
        lg:min-h-[70vh]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        mt-16
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-5 sm:px-8">
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            text-white
            leading-tight
          "
        >
          Let's Grow Together
        </h1>

        <p
          className="
            mt-5
            sm:mt-7
            text-base
            sm:text-lg
            md:text-xl
            text-gray-200
            leading-7
            sm:leading-8
            max-w-3xl
            mx-auto
          "
        >
          Whether you need premium indoor plants, landscape consultation,
          or simply have a question, our team is always happy to help.
        </p>

        <a
          href="#contact-form"
          className="
            inline-block
            mt-8
            sm:mt-10
            bg-green-700
            hover:bg-green-800
            text-white
            px-6
            sm:px-8
            py-3
            sm:py-4
            rounded-xl
            transition
            text-sm
            sm:text-base
          "
        >
          Send an Enquiry
        </a>
      </div>
    </section>
  );
};

export default ContactHero;