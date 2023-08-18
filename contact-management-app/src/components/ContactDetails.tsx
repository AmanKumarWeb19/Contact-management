import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from '../redux/actions/contactActions';

type Contact = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  // Other properties of a contact
};

type Props = {
  contact: Contact;
};

const ContactDetails: React.FC<Props> = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedEmail, setEditedEmail] = useState(contact.email);

  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      const updatedContact: Contact = {
        ...contact,
        name: editedName,
        email: editedEmail,
      };
      dispatch(editContact(contact.id, updatedContact));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <input
            type="text"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold">{contact.name}</h2>
          <p className="text-gray-600">{contact.email}</p>
          <p className="text-sm mt-1">
            {contact.isActive ? 'Active' : 'Inactive'}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
