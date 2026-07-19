const ContactHeader = () => {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
      "
    >
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Contact Enquiries
        </h1>

        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Manage customer enquiries and respond to requests.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;