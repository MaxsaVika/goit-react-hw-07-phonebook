export const getFilteredContact = ({ filter, contacts }) => {
  if (!filter) {
    return contacts;
  }

  const filteredContacts = contacts.filter(({ name }) => {
    const result = name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
    return result;
  });

  return filteredContacts;
};
