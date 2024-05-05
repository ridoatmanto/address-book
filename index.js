const addContactFormElement = document.getElementById("add-contact-form");
const searchButton = document.getElementById("search-button");
const contactTable = document
  .getElementById("contacts-table")
  .getElementsByTagName("tbody")[0];

function searchContactsByName(currentContacts, keyword) {
  const result = currentContacts.filter((contact) =>
    contact.fullName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );
  return result;
}

function renderContacts() {
  const contacts = loadContacts();
  contactTable.innerHTML = "";

  const querySearch = window.location.search;
  const params = new URLSearchParams(querySearch);
  const keyword = params.get("search");

  const filteredContacts = keyword
    ? searchContactsByName(contacts, keyword)
    : contacts;

  const contactElements = filteredContacts.map((contact, index) => {
    const rowItem = `<tr class="border-2 hover:bg-cyan-100 text-md">
              <td class="border-2 px-2 text-center">${index + 1}</td>
              <td class="border-2 px-2">
                ${contact.fullName}<span class="block italic mt-1"
                  >${contact.email}</span
                >
              </td>
              <td class="border-2 hidden lg:block px-2 pt-2">${
                contact.phone
              }</td>
              <td class="border-2 px-2 text-center">${contact.age}</td>
              <td class="border-2 text-center">
                <a
                    class="roboto-medium text-xs lg:font-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none lg:px-2 px-1 py-1 my-2 mx-2 rounded"
                    href="/contact/?id=${contact.id}"
                  >
                    Edit
                  </a>  
                <button
                  class="roboto-medium text-xs lg:font-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none lg:px-2 px-1 py-1 my-2 mx-2 rounded"
                  onClick="deleteById(${contact.id})"
                >
                  Delete
                </button>
              </td></tr>`;

    let newRow = contactTable.insertRow(contactTable.rows.length);
    newRow.innerHTML = rowItem;
  });
}

function addContact(event) {
  event.preventDefault();
  const contactFormData = new FormData(event.target);
  const contacts = loadContacts();

  const newContact = {
    id: contacts.length + 1,
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: contactFormData.get("age"),
  };
  console.log(newContact);
  const latestContacts = [...contacts, newContact];
  updateContacts(latestContacts);
  addContactFormElement.reset();
  renderContacts();
  alert(`Contact: "${newContact.fullName}" saved!.`);
}

function deleteById(id) {
  deleteContactById(id);
  renderContacts();
}
addContactFormElement.addEventListener("submit", addContact);
window.addEventListener("load", renderContacts());
