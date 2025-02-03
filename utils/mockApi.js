// Mock data for mailers and lists
let mailings = []; // In-memory storage for mailings

export const fetchMailers = async () => {
  return [
    { id: 1, name: "Welcome Email" },
    { id: 2, name: "Promotional Email" },
  ];
};

export const fetchLists = async () => {
  return [
    { id: 1, name: "Subscribers" },
    { id: 2, name: "Premium Users" },
  ];
};

// CRUD operations for mailings
export const createMailing = async (mailing) => {
  const newMailing = { ...mailing, id: mailings.length + 1 };
  mailings.push(newMailing);
  return newMailing;
};

export const fetchMailings = async () => {
  return mailings;
};

export const updateMailing = async (id, updatedMailing) => {
  const index = mailings.findIndex((m) => m.id === id);
  if (index !== -1) {
    mailings[index] = { ...mailings[index], ...updatedMailing };
    return mailings[index];
  }
  return null;
};

export const deleteMailing = async (id) => {
  mailings = mailings.filter((m) => m.id !== id);
  return true;
};
