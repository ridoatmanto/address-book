const contactFormElement = document.getElementById("add-contact-form");
const contactTableELement = document
  .getElementById("contacts-table")
  .getElementsByTagName("tbody")[0];

function renderContacts() {
  const contacts = loadContacts();
  contactTableELement.innerHTML = "";

  const querySearch = window.location.search;
  const params = new URLSearchParams(querySearch);
  const keyword = params.get("search");

  const filteredContacts = keyword
    ? searchContactsByName(contacts, keyword)
    : contacts;

  let allRows = `<tr class="border-2 hover:bg-cyan-100 text-md">
    <td class="border-2 px-2 py-2 text-center italic text-xs" colspan="4">
      Empty Contact Address
    </td>
  </tr>`;

  if (filteredContacts.length > 0) {
    allRows = "";
    filteredContacts.forEach((contact, index) => {
      allRows += `<tr class="border-2 hover:bg-cyan-100 text-md">
                    <td class="border-2 px-2 text-center">${index + 1}</td>
                    <td class="border-2 px-2">
                      <a class="roboto-medium text-sm font-bold hover:underline text-blue-600/75"
                        href="/contact/?id=${contact.id}"
                      >${contact.fullName}</a>
                      <span class="block italic mt-1">${contact.email}</span>
                    </td>
                    <td class="border-2 px-2">${contact.phone}</td>
                    <td class="border-2 text-center">
                      <a class="roboto-medium text-xs lg:font-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none lg:px-2 px-1 py-1 my-2 mx-2 rounded"
                        href="/contact/edit.html?id=${contact.id}">Edit</a>
                      <button class="roboto-medium text-xs lg:font-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none lg:px-2 px-1 py-1 my-2 mx-2 rounded"
                      onClick="deleteById(${contact.id}, '${
        contact.fullName
      }')">Delete</button>
                    </td>
                  </tr>`;
    });
  }

  contactTableELement.innerHTML = allRows;
}

function addContact(event) {
  event.preventDefault();
  const contactFormData = new FormData(event.target);
  const contacts = loadContacts();

  const newContact = {
    id: contacts.length + 1,
    fullName: contactFormData.get("fullName"),
    nickName: contactFormData.get("nickName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    birthday: contactFormData.get("birthday"),
    address: contactFormData.get("address"),
  };

  const latestContacts = [...contacts, newContact];
  updateContacts(latestContacts.reverse());
  contactFormElement.reset();
  renderContacts();
}

function deleteById(id, fullName) {
  deleteContactById(id);
  renderContacts();
}

contactFormElement.addEventListener("submit", addContact);
window.addEventListener("load", renderContacts());
