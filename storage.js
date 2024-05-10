const initContacts = [
  {
    id: 1,
    fullName: "Edson Arantes do Nascimento",
    nickName: "Pele",
    email: "pele@gmail.com",
    phone: "+23-2323333",
    address: "Três Corações, Brazil",
    birthday: new Date("1940-10-23"),
  },
  {
    id: 2,
    fullName: "Ronaldo Luís Nazário de Lima",
    nickName: "Ronaldo",
    email: "ronaldo@gmail.com",
    phone: "+12-989893",
    address: "Rio De Janeiro, Brazil",
    birthday: new Date("1976-9-18"),
  },
  {
    id: 3,
    fullName: "Ronaldo de Assis Moreira",
    nickName: "Ronaldinho",
    email: "ronaldinho@gmail.com",
    phone: "+32-27927921",
    address: "Porto Alegre, Brazil",
    birthday: new Date("1980-3-21"),
  },
  {
    id: 4,
    fullName: "Ricardo Izecson dos Santos Leite",
    nickName: "Kakà",
    email: "kaka@gmail.com",
    phone: "+33-3292939923",
    address: "Gama, Brazil",
    birthday: new Date("1982-4-22"),
  },
];

function loadContacts() {
  if (!localStorage.getItem("contacts")) {
    updateContacts(initContacts);
  }
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

function getCurrentContactId() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const contactId = Number(params.get("id"));

  return contactId;
}

function searchContactsByName(currentContacts, keyword) {
  const result = currentContacts.filter((contact) =>
    contact.fullName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );

  return result;
}
