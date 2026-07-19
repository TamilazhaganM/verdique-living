import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@verdiqueliving.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Chennai, Tamil Nadu, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 7:00 PM",
  },
];

const ContactDetails = () => {
  return (
    <div>

      <h2 className="text-4xl font-bold">
        Get In Touch
      </h2>

      <p className="text-gray-600 mt-4 leading-8">
        Have a question about our plants,
        landscaping services,
        or an existing order?

        We're always happy to help.
      </p>

      <div className="mt-10 space-y-5">

        {contactDetails.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 flex items-center gap-5 hover:-translate-y-1 transition-all"
            >

              <div className="bg-green-100 p-4 rounded-xl">

                <Icon className="text-green-700" />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.value}
                </p>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
};

export default ContactDetails;