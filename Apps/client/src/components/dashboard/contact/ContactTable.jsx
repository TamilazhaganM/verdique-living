import ContactRow from "./ContactRow";
import ContactCard from "./ContactCard";

const ContactTable = ({
  contacts,
  handleStatus,
  handleViewMessage,
}) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block bg-white rounded-2xl shadow border overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <ContactRow
                  key={contact._id}
                  contact={contact}
                  handleStatus={handleStatus}
                  handleViewMessage={handleViewMessage}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-500"
                >
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-5">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard
              key={contact._id}
              contact={contact}
              handleStatus={handleStatus}
              handleViewMessage={handleViewMessage}
            />
          ))
        ) : (
          <div className="bg-white rounded-2xl shadow border p-10 text-center text-gray-500">
            No enquiries found.
          </div>
        )}
      </div>
    </>
  );
};

export default ContactTable;