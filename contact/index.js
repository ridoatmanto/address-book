function getCurrentContactId() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const contactId = Number(params.get("id"));

  return contactId;
}

function renderContactById() {
  const contactId = getCurrentContactId();
  const contacts = loadContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  if (contact.length === 0) {
    alert(`Contact ID: ${contactId} not found.`);
    return;
  }

  document.getElementById("inline-full-name").value = contact.fullName;
  document.getElementById("inline-full-email").value = contact.email;
  document.getElementById("inline-full-phone").value = contact.phone;
  document.getElementById("inline-full-age").value = contact.age;
}

function updateContact(event) {
  event.preventDefault();
  const contactFormData = new FormData(event.target);
  const contactId = getCurrentContactId();
  const contacts = loadContacts();
  const othersContacts = contacts.filter((contact) => contact.id !== contactId);

  const updatedContact = {
    id: contactId,
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: contactFormData.get("age"),
  };
  const latestContacts = [...othersContacts, updatedContact];
  updateContacts(latestContacts);
  renderContactById();
  alert(`Contact: "${updatedContact.fullName}" updated!.`);
}

document
  .getElementById("edit-contact-form")
  .addEventListener("submit", updateContact);
renderContactById();
