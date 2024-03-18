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
const renderUsers = (Userdb) => {
  return Userdb.map(renderUserCard).join(" ");
};
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
const renders = (Userdb) => {
  return (document.querySelector(".users").innerHTML = renderAllHTML(Userdb));
};
renders(usersDB);
const statusBtn = document.querySelectorAll(".users_card--btn");
statusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clikedBtn = e.target;
    const getId = clikedBtn.dataset.id;
    const user = usersDB.findIndex((u) => u.id == getId);
    usersDB[user].isActive = !usersDB[user].isActive;
    renders(usersDB);
  });
});
