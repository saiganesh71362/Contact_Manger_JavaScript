import * as ContactService from "../Services/ContactService.js";

window.addEventListener("DOMContentLoaded", () => {
  ContactService.getAllContacts()
    .then((response) => {
      let data = response.data;

      displaycards(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

const displaycards = (contacts) => {
  const cardrowelement = document.querySelector("#card-row");
  let cardElement = ``;
  for (let contact of contacts) {
    cardElement += `
    <div class="col-sm-6">
      <div class="card mt-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <img
                src="../Images/PHOTO.png"
                alt=""
                class="img-fluid w-100 h-100 rounded-circle"
              />
            </div>
            <div class="col-sm">
              <ul class="list-group">
                <li class="list-group-item">
                Name : <span class="fw-bold">${contact.name}</span>
                </li>
                <li class="list-group-item">Email : <span class="fw-bold">${contact.email}</span>
                </li>
                <li class="list-group-item">
                  Phone-No : <span class="fw-bold">${contact.mobile}</span>
                 </li>
              </ul>
            </div>
            <div class="col-sm-1">
              <a href="ViewContacts.html?contactId =${contact.id}">
              <i class="bi-eye-fill p-1 text-primary"></i></a>
              <br />
              <br />
              <a href="update.html?contactId =${contact.id}">
              <i class="bi-pencil-square p-1 text-bg-success"></i></a>
              <br />
              <br />
              <a href="Delete.html?contactId =${contact.id}">
              <i class="bi-trash-fill p-1 text-bg-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
  cardrowelement.innerHTML = cardElement;
};
// 'ContactServices' is declared but its value is never read.ts(6133)
// module "d:/VTALENT/HTML-PROJECTS/Bootstrap_Project/project/Services/ContactService"
