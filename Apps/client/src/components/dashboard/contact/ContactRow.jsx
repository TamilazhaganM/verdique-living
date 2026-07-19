import { Eye } from "lucide-react";
import StatusDropdown from "./StatusDropdown";

const ContactRow = ({
  contact,
  handleStatus,
  handleViewMessage,
}) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium">
        {contact.name}
      </td>

      <td className="px-6 py-4">
        {contact.email}
      </td>

      <td className="px-6 py-4">
        {contact.phone}
      </td>

      <td className="px-6 py-4">
        {contact.subject}
      </td>

      <td className="px-6 py-4">
        <StatusDropdown
          value={contact.status}
          onChange={(status) =>
            handleStatus(contact._id, status)
          }
        />
      </td>

      <td className="px-6 py-4">
        {new Date(contact.createdAt).toLocaleDateString()}
      </td>

      <td className="px-6 py-4 text-center">
        <button
          onClick={() => handleViewMessage(contact)}
          className="flex items-center justify-center gap-2 text-green-700 hover:text-green-900"
        >
          <Eye size={18} />
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;