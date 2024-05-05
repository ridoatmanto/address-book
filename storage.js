function initContacts() {
  if (!localStorage.getItem("contacts")) {
    updateContacts(contacts);
  }
}

function loadContacts() {
  const contacts = localStorage.getItem("contacts");
  return JSON.parse(contacts);
}

function getContactById(id) {
  const contact = contacts.find((contact) => {
    return contact.id === id;
  });
}

function addContact(contact) {
  const currentContacts = loadContacts();
  const updatedContacts = [...currentContacts, contact];
  updateContacts(updatedContacts);
}

function updateContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function deleteContactById(id) {
  const currentContacts = loadContacts();
  const latestContacts = currentContacts.filter((contact) => {
    return contact.id !== id;
  });
  updateContacts(latestContacts);
}
