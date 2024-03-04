import * as ContactService from "../Services/ContactService.js";
// when the page is loaded get group data from server and disply as dropdown
window.addEventListener("DOMContentLoaded", () => {
  ContactService.getAllgroups()
    .then((groupResponse) => {
      const groups = groupResponse.data;
      displayDropdown(groups);
    })
    .catch((error) => {
      console.error(error);
    });
});
// display dropdown menu
const displayDropdown = (groups) => {
  const selectElement = document.querySelector("#group-list");
  let optionalElement = `<option value="">Select a Group</option>`;
  for (let group of groups) {
    optionalElement += `<option value="${group.id}">${group.name}</option>`;
  }
  selectElement.innerHTML = optionalElement;
};

//form subbmited
const addContactForm = document.querySelector("#add-contact-form");
addContactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const contact = {
    name: document.querySelector("#name-input").value,
    imageUrl: document.querySelector("#img-url").value,
    mobile: document.querySelector("#mobile-input").value,
    email: document.querySelector("#email-input").value,
    company: document.querySelector("#company-input").value,
    title: document.querySelector("#title-input").value,
    groupId: document.querySelector("#group-list").value,
  };

  //request  function
  ContactService.crateContacts(contact)
    .then((response) => {
      if (response.data) {
        window.location.href = "index.html";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
// img-function
const imageUrlElement = document.querySelector("#img-url");
imageUrlElement.addEventListener("input", () => {
  //console.log(imageUrlElement.value);
  const imageUrl = imageUrlElement.value;
  const displayImageElement = document.querySelector("#img");
  displayImageElement.setAttribute("src", imageUrl);
});
// request function
addContactForm();
