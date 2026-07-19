import { Eye } from "lucide-react";
import StatusDropdown from "./StatusDropdown";

const ContactCard = ({
  contact,
  handleStatus,
  handleViewMessage,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow border p-5">

      <div className="space-y-4">

        <div>
          <p className="text-xs text-gray-500">Name</p>
          <p className="font-semibold">{contact.name}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Email</p>
          <p className="break-all">{contact.email}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Phone</p>
          <p>{contact.phone}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Subject</p>
          <p>{contact.subject}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-2">Status</p>

          <StatusDropdown
            value={contact.status}
            onChange={(status) =>
              handleStatus(contact._id, status)
            }
          />
        </div>

        <div>
          <p className="text-xs text-gray-500">Date</p>
          <p>{new Date(contact.createdAt).toLocaleDateString()}</p>
        </div>

      </div>

      <button
        onClick={() => handleViewMessage(contact)}
        className="
          mt-5
          w-full
          flex
          items-center
          justify-center
          gap-2
          bg-green-700
          hover:bg-green-800
          text-white
          py-3
          rounded-xl
          transition
        "
      >
        <Eye size={18} />
        View Message
      </button>

    </div>
  );
};

export default ContactCard;