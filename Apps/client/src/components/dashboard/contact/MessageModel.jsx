import { X } from "lucide-react";

const MessageModal = ({ isOpen, onClose, contact }) => {
  if (!isOpen || !contact) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Contact Enquiry
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <div>
            <p className="text-gray-500 text-sm">
              Customer
            </p>

            <h3 className="font-semibold text-lg">
              {contact.name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Email
            </p>

            <p>{contact.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Phone
            </p>

            <p>{contact.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Subject
            </p>

            <p>{contact.subject}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Message
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mt-2 leading-7">
              {contact.message}
            </div>
          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex justify-end">

          <button
            onClick={onClose}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default MessageModal;