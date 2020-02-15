const registrationForm = document.querySelector("#register-form");
const eventName = document.querySelector("#event-name");
const secondParticipant = document.querySelector("#sname");

eventName.addEventListener("click", () => {
  if (eventName.value == "Coding" || eventName.value == "Web") {
    secondParticipant.style.pointerEvents = "fill";
    secondParticipant.style.background = "none";
  } else {
    secondParticipant.style.pointerEvents = "none";
    secondParticipant.style.background = "grey";
  }
});

// fname,sname,mail,college,phoneNumber

registrationForm.addEventListener("submit", e => {
  e.preventDefault();

  const now = new Date();

  input = {
    fname: registrationForm.fname.value,
    sname: registrationForm.sname.value,
    mail: registrationForm.mail.value,
    college: registrationForm.college.value,
    phoneNumber: registrationForm.phoneNumber.value,
    event: eventName.value,
    time: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection("two")
    .add(input)
    .then(() => {})
    .catch(err => {});
});
