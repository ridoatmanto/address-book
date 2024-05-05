// function renderContacts() {
//   for (let index = 0; index < contacts.length; index++) {
//     const contact = contacts[index];
//     const isAlive = contact.isAlive === true ? "Still Alive" : "Rest in Peace";

//     const completeProfile = `
//     ${contact.fullName} (${contact.nickName}) is ${contact.age} years old.

//     Email: ${contact.email}
//     Phone: ${contact.phone}
//     Birthday: ${contact.birthday}

//     Address: ${contact.address}

//     ${isAlive}!
//     *********************************`;
//     console.log(completeProfile);
//   }
// }

// function addContact() {
//   const newContact = {
//     id: 5,
//     fullName: "Roberto Carlos da Silva Rocha",
//     nickName: "Carlos",
//     email: "carlos@gmail.com",
//     phone: "+23-222222",
//     age: 51,
//     isAlive: true,
//     address: "Garça, São Paulo, Brazil",
//     birthday: new Date("1973-04-10"),
//   };

//   // contacts.push(newContact); // using push will change data directly

//   // use splat instead to make ne variable from contacts array
//   contacts = [...contacts, newContact];
//   console.log(`New Contact Added: ${newContact.nickName}!`);
// }

// function searchContacts(keyword) {
//   const searchedContacts = contacts.filter((contact) => {
//     return contact.fullName
//       .toLocaleLowerCase()
//       .includes(keyword.toLocaleLowerCase());
//   });
//   console.log(searchedContacts);
// }

// addContact();
// renderContacts();
// searchContacts("to");
// getContactById(3);
// deleteContactById(1);
initContacts();

const contactTable = document
  .getElementById("contacts-table")
  .getElementsByTagName("tbody")[0];

function renderContacts() {
  const contacts = loadContacts();
  contactTable.innerHTML = "";
  //   const querySearch = window.location.search;
  //   const params = new URLSearchParams(querySearch);
  //   const keyword = params.get("search");

  //   // const contactElement =
  // console.log(contacts);
  const contactElements = contacts.map((contact, index) => {
    const rowItem = `<tr class="border-2 hover:bg-cyan-100 text-md">
              <td class="border-2 px-2 text-center">${index + 1}</td>
              <td class="border-2 px-2">
                ${contact.fullName}<span class="block italic mt-1"
                  >${contact.email}</span
                >
              </td>
              <td class="border-2 px-2 pt-2">${contact.phone}</td>
              <td class="border-2 px-2 text-center">${contact.age}</td>
              <td class="border-2 text-center">
                <button
                  class="roboto-medium text-xs lg:font-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none lg:px-2 px-1 py-1 my-2 rounded"
                  onClick="deleteById(${contact.id})"
                >
                  Delete
                </button>
              </td></tr>`;

    let newRow = contactTable.insertRow(contactTable.rows.length);
    newRow.innerHTML = rowItem;
  });
}

function deleteById(id) {
  deleteContactById(id);
  renderContacts();
}

renderContacts();
