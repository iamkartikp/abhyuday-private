const clock = document.querySelector('.countdown');

const count = new Date('March 20, 2020 10:00:00').getTime()
const tick = () => {
    const now = new Date().getTime();
    const d = count - now;
    
    const days = Math.floor(d/(1000*60*60*24));
    const h = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    const m =  Math.floor((d%(1000*60*60))/(1000*60));
    const s = Math.floor((d%(1000*60))/(1000));

    const html =`
         <div> <span>0</span> <h6>Days</h6></div>
         <div> <span>0</span> <h6>Hours</h6></div>
         <div> <span>0</span> <h6>Minutes</h6></div>
         <div> <span>0</span> <h6>Seconds</h6></div>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);

const notice = document.querySelector('.notice');
const closeNotice = document.querySelector('#close-notice');

closeNotice.addEventListener('click',()=> {
    notice.style.display = 'none';
});
