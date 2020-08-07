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
      <tr>
        <td> ${snap.fname}</td> 
        <td> ${snap.college}</td> 
        <td> ${snap.course}</td> 
        <td> ${snap.event}</td> 
        <td> ${snap.phoneNumber}</td> 
        <td> ${snap.mail}</td> 
        <td> ${snap.sname}</td> 
        <td> ${snap.tname}</td> 
        <td> ${snap.fourName}</td> 
     </tr>
    `;
    tbody.innerHTML += html;
}
