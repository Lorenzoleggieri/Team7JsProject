
const contactForm = document.getElementById('contactForm')


 const contactFormResponse = () =>{
    let modalAnswers = document.querySelectorAll("#contactForm input, #contactForm select, #contactForm textarea")
    let Modal = {}
    modalAnswers.forEach((element) => Modal[element.id] = element.value)
    console.log(JSON.stringify(Modal))
}


contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    contactFormResponse();
    contactForm.reset();
})