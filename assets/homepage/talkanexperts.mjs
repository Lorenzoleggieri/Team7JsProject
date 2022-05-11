export const talkFormResponse = () =>{
    let modalAnswers = document.querySelectorAll("#talkForm input, #talkForm select, #talkForm textarea")
    let Modal = {}
    modalAnswers.forEach((element) => Modal[element.id] = element.value)
    console.log(JSON.stringify(Modal))
}