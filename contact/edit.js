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
  console.log(contact);
  document.getElementById("inline-full-name").value = contact.fullName;
  document.getElementById("inline-nick-name").value = contact.nickName;
  document.getElementById("inline-full-email").value = contact.email;
  document.getElementById("inline-full-phone").value = contact.phone;
  document.getElementById("inline-full-birthday").value = contact.birthday;
  document.getElementById("inline-full-address").value = contact.address;
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
    nickName: contactFormData.get("nickName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    birthday: contactFormData.get("birthday"),
    address: contactFormData.get("address"),
  };
  const latestContacts = [...othersContacts, updatedContact];
  updateContacts(latestContacts.reverse());
  renderContactById();
  alert(`Contact: "${updatedContact.fullName}" updated!.`);
}

document
  .getElementById("edit-contact-form")
  .addEventListener("submit", updateContact);
renderContactById();
