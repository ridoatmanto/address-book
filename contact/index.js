const contactLabel = {
  fullName: "Full Name",
  nickName: "Nick Name",
  email: "Email Address",
  phone: "Phone",
  birthday: "Birthday",
  age: "Age",
  address: "Address",
};

const contactInputId = {
  fullName: { id: "full-name", inputType: "text" },
  nickName: { id: "nick-name", inputType: "text" },
  email: { id: "email", inputType: "email" },
  phone: { id: "phone", inputType: "tel" },
  birthday: { id: "birthday", inputType: "date" },
};

function renderDetailContactById() {
  const contactId = getCurrentContactId();
  const contacts = loadContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  let contactFields = "";

  Object.keys(contactLabel).forEach((key) => {
    let value = contact[key];

    if (key === "age") {
      const today = new Date();
      const bornDate = new Date(contact["birthday"]);
      value = today.getFullYear() - bornDate.getFullYear();
      value += " years old.";
    }

    if (key === "birthday") {
      value = new DateFormatter(value).getFormattedDate();
    }

    contactFields += `<div class="md:flex md:items-center mb-4">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold lg:text-right text-left mb-1 md:mb-0 pr-4"
            for="inline-full-name"
            >${contactLabel[key]}</label
          >
        </div>
        <div class="md:w-2/3 text-gray-500">${value}</div>
      </div>`;
  });

  document.getElementById("detail-contact").innerHTML =
    contactFields +
    `<div class="md:flex md:items-center">
       <div class="md:w-1/3"></div>
       <div class="md:w-2/3">
         <button
           id="edit-contact-button"
           class="roboto-medium text-sm text-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none px-4 py-2 my-2 rounded"
           onClick="renderEditFormContactById()">
          EDIT
        </button>
       </div>
     </div>`;
}

function renderEditFormContactById() {
  const contactId = getCurrentContactId();
  const contacts = loadContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  let inputFields = "";
  Object.keys(contactInputId).forEach((key) => {
    let value = contact[key];

    if (key !== "age") {
      inputFields += `
        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold lg:text-right text-left mb-1 md:mb-0 pr-4"
              for="input-${contactInputId[key]}"
            >
              ${contactLabel[key]}
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-[#E5E5E5] appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="input-${contactInputId[key].id}"
              name="${key}"
              type="${contactInputId[key].inputType}"
              placeholder="Your ${contactLabel[key]} here..."
              value="${value}"
            />
          </div>
        </div>`;
    }
  });

  document.getElementById("detail-contact").innerHTML =
    `<form
      method="post"
      id="edit-contact-form"
      class="sm:w-full max-w-lg roboto-medium"
    >` +
    inputFields +
    `<div class="md:flex md:items-center mb-4">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold lg:text-right text-left mb-1 md:mb-0 pr-4 w-100"
          for="inline-full-address"
        >
          Address
        </label>
      </div>
      <div class="md:w-2/3">
        <textarea
          class="bg-[#E5E5E5] appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-address"
          name="address"
          placeholder="Your address..."
        >${contact["address"]}</textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button
          class="roboto-medium text-sm text-bold bg-[#D9D9D9] hover:bg-[#ccc] focus:shadow-outline focus:outline-none px-4 py-2 my-2 rounded"
          type="submit"
        >
          UPDATE
        </button>
      </div>
    </div>
  </form>`;

  const bornDate = new Date(contact["birthday"]);
  day = bornDate.getDate();
  month = Number(bornDate.getMonth()) + 1;
  year = bornDate.getFullYear();

  document.getElementById(
    "input-birthday"
  ).innerHTML = `${year}-${month}-${day}`;

  document
    .getElementById("edit-contact-form")
    .addEventListener("submit", updateContact);
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
  renderEditFormContactById();
}

renderDetailContactById();
