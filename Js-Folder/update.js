import * as ContactService from "../Services/ContactService.js";
const contactId = document.baseURI.split("?")[1].split("=")[1];

window.addEventListener("DOMContentLoaded", () => {
  ContactService.getContact(contactId)
    .then((contactResponse) => {
      let contact = contactResponse.data;
      ContactService.getAgroup(contact)
        .then((groupResponse) => {
          const group = groupResponse.data;
          console.log(group.name);
          console.log(contactResponse.data);
          displayUpdateInfo(contact, group);
        })
        .catch((groupError) => {
          console.error(groupError);
        });
    })
    .catch((contactError) => {
      console.error(contactError);
    });
});

// grouap loaded in the select option when document is loaded
window.addEventListener("DOMContentLoaded", () => {
  ContactService.getAllgroups()
    .then((groupresponse) => {
      const groups = groupresponse.data;
      // console.log(groups);
      displayGroups(groups); // method   ---> displayGroups---->
    })
    .catch((error) => {
      console.log(error);
    });
});

// display dropdown menu --> work
const displayGroups = (groups) => {
  const selectElement = document.querySelector("#group-list");
  let optionalElement = `<option value="">Select a Group</option>`;
  for (let group of groups) {
    optionalElement += `<option value="${group.id}">${group.name}</option>`;
  }
  selectElement.innerHTML = optionalElement;
};

// img-function  --> work
const imageUrlElement = document.querySelector("#img-url");
imageUrlElement.addEventListener("input", () => {
  const imageUrl = imageUrlElement.value;
  const displayImageElement = document.querySelector("#img");
  displayImageElement.setAttribute("src", imageUrl);
});

// // update info
// update info
const displayUpdateInfo = (contact, group) => {
  document.querySelector("#name-input").value = contact.name;
  document.querySelector("#email-input").value = contact.email;
  document.querySelector("#mobile-input").value = contact.mobile;
  document.querySelector("#img-url").src = contact.imageUrl;
  document.querySelector("#title-input").value = contact.title;
  document.querySelector("#company-input").value = contact.company;
  document.querySelector("#group-list").value = contact.groupId;
};

//form update
const addContactForm = () => {
  const addContactForm = document.querySelector("#update-contact-form");
  addContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const contact = {
      name: document.querySelector("#name-input").value,
      email: document.querySelector("#email-input").value,
      mobile: document.querySelector("#mobile-input").value,
      imageUrl: document.querySelector("#img-url").value,
      title: document.querySelector("#title-input").value,
      company: document.querySelector("#company-input").value,
      groupId: document.querySelector("#group-list").value,
    };
    //console.log(contact);
    //request  function
    const id = document.baseURI.split("?")[1].split("=")[1];

    if (Object.keys(contact).length > 0 && contactId && contactId.length > 0) {
      ContactService.updateContacts(contact, id)
        .then((response) => {
          if (response.data) {
            window.location.href = "../index.html";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });
};
// request function
addContactForm();
