"use strict";
let usersDB = [
  {
    id: 1,
    username: "Hassan Sattar",
    isActive: true,
  },
  {
    id: 2,
    username: "Muhammad",
    isActive: false,
  },
  {
    id: 3,
    username: "Ahtisam",
    isActive: false,
  },
  {
    id: 4,
    username: "Hassan Khalid",
    isActive: false,
  },
  {
    id: 5,
    username: "Noor Khan",
    isActive: false,
  },
  {
    id: 6,
    username: "Sikander Khan",
    isActive: true,
  },
  {
    id: 7,
    username: "Usman khan",
    isActive: true,
  },
  {
    id: 8,
    username: "Muzammil",
    isActive: true,
  },
  {
    id: 9,
    username: "Ahsan dev",
    isActive: false,
  },
  {
    id: 10,
    username: "Bilal dev",
    isActive: true,
  },
];
const renderUserCard = ({ id, username, isActive }) => {
  const statusText = isActive == true ? "Active" : "Inactive";
  const statusClass = isActive == true ? "active-status" : "inactive-status";
  const btnText =
    isActive == true ? "Deactivate the user!" : "Activate the user!";
  const btnClass = isActive == true ? "active-btn" : "inactive-btn";
  return `
    <div class="users_card flex">
      <h2 class="users_card--name">${username}</h2>
      <h3 class="users_card--status ${statusClass}">${statusText}</h3>
      <button class="users_card--btn ${btnClass}" data-id =${id}>
        ${btnText}
      </button>
    </div>
  `;
};
const renderUsers = (Userdb) => Userdb.map(renderUserCard).join(" ");
const renderAllHTML = (usersDB) => {
  const activeUser = usersDB.filter(({ isActive }) => isActive);
  const inactiveUser = usersDB.filter(({ isActive }) => !isActive);
  const ahiddenClass = activeUser.length == 0 ? "hidden" : "";
  const inahiddenClass = inactiveUser.length == 0 ? "hidden" : "";
  return `
  <div class="users_active ${ahiddenClass}">
     <h1 class="secondary-heading">Active Users</h1>
     <div class="users_cards active_cards flex">${renderUsers(activeUser)}</div>
  </div>
  <div class="users_inactive ${inahiddenClass}">
    <h1 class="secondary-heading">Inactive Users</h1>
    <div class="users_cards inactive_cards flex">${renderUsers(
      inactiveUser
    )}</div>
  </div>
  `;
};
const getRenderHTML = (Userdb) =>
  (document.querySelector(".users").innerHTML = renderAllHTML(Userdb));
getRenderHTML(usersDB);
const btnHandler = () => {
  const allBtn = document.querySelectorAll(".users_card--btn");
  allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentBtn = e.target;
      const btnId = currentBtn.dataset.id;
      const user = usersDB.find((u) => u.id == btnId);
      user.isActive = !user.isActive;
      getRenderHTML(usersDB);
      btnHandler();
    });
  });
};
btnHandler();
