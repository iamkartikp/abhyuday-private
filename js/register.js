


//javaScript
const registrationForm = document.querySelector("#register-form");
const eventName = document.querySelector("#event-name");
const secondParticipant = document.querySelector("#sname");
const thirdParticipant = document.querySelector("#tname");
const fourthParticipant = document.querySelector("#fourName");
const success = document.querySelector('.success');
const error = document.querySelector('.error');

const db = firebase.firestore();

eventName.addEventListener("change", () => {
  if (eventName.value == "Quiz" || eventName.value == "Web" || eventName.value=="TreasureHunt" 
  || eventName.value=="Graphicon" || eventName.value=="Coding") {
    secondParticipant.style.opacity = 10;
    thirdParticipant.style.opacity = 0;
    fourthParticipant.style.opacity = 0;
  } else if(eventName.value=="AppDev") {
    secondParticipant.style.opacity = 10;
    thirdParticipant.style.opacity = 10;
    fourthParticipant.style.opacity = 0;
  } else if(eventName.value == "CounterStrike" || eventName.value =="PUBG") {
    secondParticipant.style.opacity = 10;
    thirdParticipant.style.opacity = 10;
    fourthParticipant.style.opacity = 10;
  }
  else {
    // secondParticipant.style.pointerEvents = "none";
    // secondParticipant.style.background = "grey";
    secondParticipant.style.opacity = 0;
    thirdParticipant.style.opacity = 0;
    fourthParticipant.style.opacity = 0;
  }
});

// fname,sname,mail,college,phoneNumber

registrationForm.addEventListener("submit", e => {
  e.preventDefault();

  const now = new Date();

  input = {
    fname: registrationForm.fname.value,
    sname: registrationForm.sname.value,
    tname: registrationForm.tname.value,
    fourName: registrationForm.fourName.value,
    mail: registrationForm.mail.value,
    college: registrationForm.college.value,
    phoneNumber: registrationForm.phoneNumber.value,
    event: eventName.value,
    course: registrationForm.course.value,
    time: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection("abhyudayrit")
    .add(input)
    .then(() => {
      success.style.display = 'flex';
      scrollTo(0,0);
    })
    .catch(err => {
      console.log(err);
      error.style.display = 'flex';
    });
});


const notice = document.querySelector('.notice');
const closeNotice = document.querySelector('#close-notice');

closeNotice.addEventListener('click',()=> {
    notice.style.display = 'none';
});
