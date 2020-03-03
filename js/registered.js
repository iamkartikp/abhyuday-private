var firebaseConfig = {
    apiKey: "AIzaSyDDCw013n-vCsYpCPUeTgoFG-avob_Xa9s",
    authDomain: "abhyudayrit-ecafb.firebaseapp.com",
    databaseURL: "https://abhyudayrit-ecafb.firebaseio.com",
    projectId: "abhyudayrit-ecafb",
    storageBucket: "abhyudayrit-ecafb.appspot.com",
    messagingSenderId: "288688629306",
    appId: "1:288688629306:web:d7568ace6d1e1d9f9d7703",
    measurementId: "G-DWL5W0K3PG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// javaScript
const tbody = document.querySelector('#tbody');
const btn = document.querySelector('.btn');
const db = firebase.firestore();

//print
btn.addEventListener('click', ()=> {
    print();
})

//fireBase database
db.collection('abhyudayrit').get()
  .then(snapshot=> {
    snapshot.docs.forEach(doc => {
        template(doc.data());
    })
  }) 
  .catch(err => {
      console.log(err);
  })


//template

function template(snap) {
    html = `
        <td> ${snap.fname}</td> 
        <td> ${snap.college}</td> 
        <td> ${snap.course}</td> 
        <td> ${snap.event}</td> 
        <td> ${snap.phoneNumber}</td> 
        <td> ${snap.mail}</td> 
        <td> ${snap.sname}</td> 
        <td> ${snap.tname}</td> 
        <td> ${snap.fourName}</td> 
    `;
    tbody.innerHTML += html;
}