// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAM0-fPghHYWab3xB8n_8MO2ROPnbYpLFE",
  authDomain: "abhyuday-48c00.firebaseapp.com",
  databaseURL: "https://abhyuday-48c00.firebaseio.com",
  projectId: "abhyuday-48c00",
  storageBucket: "abhyuday-48c00.appspot.com",
  messagingSenderId: "203228362364",
  appId: "1:203228362364:web:41bccfa6a0e57461cf7bf9",
  measurementId: "G-TGF85T5Q4C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//javaScript
const registrationForm = document.querySelector("#register-form");
const eventName = document.querySelector("#event-name");
const secondParticipant = document.querySelector("#sname");
const thirdParticipant = document.querySelector("#tname");
const fourthParticipant = document.querySelector("#four-name");
const success = document.querySelector('.success');
const error = document.querySelector('.error');

const db = firebase.firestore();

eventName.addEventListener("change", () => {
  if (eventName.value == "Quiz" || eventName.value == "Web" || eventName.value=="TreasureHunt") {
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
    mail: registrationForm.mail.value,
    college: registrationForm.college.value,
    phoneNumber: registrationForm.phoneNumber.value,
    event: eventName.value,
    course: registrationForm.course.value,
    time: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection("two")
    .add(input)
    .then(() => {
      success.style.display = 'flex';
    })
    .catch(err => {
      error.style.display = 'flex';
    });
});
