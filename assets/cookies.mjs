  export const cookieForm = () =>{
    let container = document.createElement('div')
    container.classList.add('biscotto', 'rounded', 'd-flex', 'flex-column', 'align-items-center',)
    let text = document.createElement('p')
    text.classList.add('ms-2')
    text.innerHTML = 'Accetta i nostri cookies per  aiutarci a migliorare il nostro servizio'
    let btnContainer = document.createElement('div')
    btnContainer.classList.add('mb-2', 'd-flex', 'gap-2')
    btnContainer.innerHTML = '<button id="acceptcookie">Accetta</button><button id="rejectcookie">Rifiuta</button>'
    container.append(text)
    container.append(btnContainer)
    document.body.prepend(container)


}

export const cookieGen = () =>{
  let date = new Date(Date.now() + 86400e3)
  date = date.toUTCString();
  document.cookie = 'PageCookie=cookie; SameSite=Lax;  Secure;expires='+date;
}




