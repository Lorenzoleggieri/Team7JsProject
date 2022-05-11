import { cookieForm, cookieGen } from "./cookies.mjs";
import { offCanvasSend } from "./offcanvas.mjs";
import { talkFormResponse } from "./talkanexperts.mjs";

window.addEventListener("load",  () => {
  if (
    document.cookie.split(";").some((val) => val.trim().startsWith("PageCookie="))
    ) {
    } else {
      let eventForm = new CustomEvent('cookieFormLoaded')
      cookieForm();
      window.dispatchEvent(eventForm)
  }
});

window.addEventListener('cookieFormLoaded', () =>{
  const acceptButton =  document.getElementById('acceptcookie');
  const rejectButton = document.getElementById('rejectcookie');



   acceptButton.addEventListener('click', () =>{
     cookieGen();
     document.querySelector('.biscotto').style.display = 'none'
     document.querySelector('.biscotto').classList.remove('d-flex')
     console.log(`Cookie Accepted :)`)

   })

   rejectButton.addEventListener('click', () =>{
   document.querySelector('.biscotto').style.display = 'none'
   document.querySelector('.biscotto').classList.remove('d-flex')
  console.log(`Cookie Rejected :( `)})
  

});






const offCanvasForm = document.getElementById('offCanvasForm')

offCanvasForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  offCanvasSend();
  offCanvasForm.reset()
})


let talkForm = document.getElementById("talkForm")

talkForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  talkFormResponse();
  talkForm.reset();
})





