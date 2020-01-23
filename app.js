const github = new Github();

const ui = new UI();

const searchUsers = document.getElementById("searchUser");

searchUsers.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;

  if (userText != "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //  show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //  show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
