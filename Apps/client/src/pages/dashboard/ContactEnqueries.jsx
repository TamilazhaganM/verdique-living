import { useEffect, useState } from "react";
import ContactHeader from "../../components/dashboard/contact/ContactHeader";
import SearchBar from "../../components/dashboard/contact/SearchBar";
import ContactTable from "../../components/dashboard/contact/ContactTable";
import MessageModal from "../../components/dashboard/contact/MessageModel";

import {
  getAllContacts,
  updateContactStatus,
} from "../../services/contact.service";

const ContactEnquiries = () => {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedContact, setSelectedContact] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await getAllContacts();
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateContactStatus(id, status);

      setContacts((prev) =>
        prev.map((contact) =>
          contact._id === id
            ? {
                ...contact,
                status,
              }
            : contact
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewMessage = (contact) => {
    setSelectedContact(contact);
    setOpenModal(true);
  };

  const filteredContacts = contacts.filter((contact) => {
    const keyword = search.toLowerCase();

    return (
      (contact.name || "").toLowerCase().includes(keyword) ||
      (contact.email || "").toLowerCase().includes(keyword) ||
      String(contact.phone || "").includes(keyword)
    );
  });

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading Contact Enquiries...
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">

      <ContactHeader />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ContactTable
        contacts={filteredContacts}
        handleStatus={handleStatus}
        handleViewMessage={handleViewMessage}
      />

      <MessageModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        contact={selectedContact}
      />

    </div>
  );
};

export default ContactEnquiries;