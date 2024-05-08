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

  const today = new Date();
  const bornDate = new Date(contact.birthday);
  const age = today.getFullYear() - bornDate.getFullYear();

  document.getElementById("inline-full-name").innerText = contact.fullName;
  document.getElementById("inline-nick-name").innerText = contact.nickName;
  document.getElementById("inline-full-email").innerText = contact.email;
  document.getElementById("inline-full-phone").innerText = contact.phone;
  document.getElementById("inline-full-birthday").innerText = new DateFormatter(
    contact.birthday
  ).getFormattedDate();
  document.getElementById("inline-full-age").innerText = age + " years old";
  document.getElementById("inline-full-address").innerText = contact.address;
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

function editContact() {
  const contactId = getCurrentContactId();
  window.location.href = `/contact/edit.html?id=${contactId}`;
}

document
  .getElementById("edit-contact-button")
  .addEventListener("click", editContact);
renderContactById();
