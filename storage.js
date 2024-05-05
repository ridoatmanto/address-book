function initContacts() {
  console.log("Init contacts");
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  console.log("Load all contacts");
  const contacts = localStorage.getItem("contacts");
  return JSON.parse(contacts);
}

function getContactById(id) {
  const contact = contacts.find((contact) => {
    return contact.id === id;
  });
  console.log(`Load contact with ID: ${id}`);

  console.log(contact);
}

function saveContact(contact) {
  console.log(`Save contact: ${contact}`);
}

function deleteContactById(id) {
  const currentContacts = loadContacts();
  const latestContacts = currentContacts.filter((contact) => {
    return contact.id !== id;
  });
  console.log(`ID: ${id} deleted!`);
  console.log(latestContacts);
  localStorage.setItem("contacts", JSON.stringify(latestContacts));
}
