let contacts = [
  {
    id: 1,
    fullName: "Edson Arantes do Nascimento",
    nickName: "Pele",
    email: "pele@gmail.com",
    phone: "+23-2323333",
    age: 82,
    isAlive: false,
    address: "Três Corações, Brazil",
    birthday: new Date("1940-10-23"),
  },
  {
    id: 2,
    fullName: "Ronaldo Luís Nazário de Lima",
    nickName: "Ronaldo",
    email: "ronaldo@gmail.com",
    phone: "+12-989893",
    age: 47,
    isAlive: true,
    address: "Rio De Janeiro, Brazil",
    birthday: new Date("1976-9-18"),
  },
  {
    id: 3,
    fullName: "Ronaldo de Assis Moreira",
    nickName: "Ronaldinho",
    email: "ronaldinho@gmail.com",
    phone: "+32-27927921",
    age: 44,
    isAlive: true,
    address: "Porto Alegre, Brazil",
    birthday: new Date("1980-3-21"),
  },
  {
    id: 4,
    fullName: "Ricardo Izecson dos Santos Leite",
    nickName: "Kakà",
    email: "kaka@gmail.com",
    phone: "+33-3292939923",
    age: 42,
    isAlive: true,
    address: "Gama, Brazil",
    birthday: new Date("1982-4-22"),
  },
];

function renderContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const isAlive = contact.isAlive === true ? "Still Alive" : "Rest in Peace";

    const completeProfile = `
    ${contact.fullName} (${contact.nickName}) is ${contact.age} years old.
    
    Email: ${contact.email}
    Phone: ${contact.phone}
    Birthday: ${contact.birthday}
    
    Address: ${contact.address}
    
    ${isAlive}!
    *********************************`;
    console.log(completeProfile);
  }
}

function addContact() {
  const newContact = {
    id: 5,
    fullName: "Roberto Carlos da Silva Rocha",
    nickName: "Carlos",
    email: "carlos@gmail.com",
    phone: "+23-222222",
    age: 51,
    isAlive: true,
    address: "Garça, São Paulo, Brazil",
    birthday: new Date("1973-04-10"),
  };

  // contacts.push(newContact); // using push will change data directly

  // use splat instead to make ne variable from contacts array
  contacts = [...contacts, newContact];
  console.log(`New Player Added : ${newContact.nickName}!`);
}

addContact();
renderContacts();
