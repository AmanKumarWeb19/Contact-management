import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact, deleteContact } from '../redux/actions/contactActions';

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

const ContactListItem: React.FC<Props> = ({ contact }) => {
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

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="p-4 mb-2 bg-white rounded shadow flex justify-between items-center">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        ) : (
          <>
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-sm mt-1">
              {contact.isActive ? 'Active' : 'Inactive'}
            </p>
          </>
        )}
      </div>
      <div>
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-600"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="text-blue-500 hover:text-blue-600"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="ml-2 text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactListItem;
