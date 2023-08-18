// src/components/ContactList.tsx
import { useSelector } from "react-redux";
import { RootState } from "../types/types"; // Adjust the path based on your project structure
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact List</h2>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
