// types/types.ts
export type Contact = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  // Other properties of a contact
};

export type RootState = {
  contacts: Contact[]; // Assuming Contact is a type you've defined
  // Other properties of your state
};
  