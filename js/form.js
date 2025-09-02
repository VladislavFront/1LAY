const TOKEN = '8038753925:AAEeUp0Rdkmk-Uu87QW2GJeNKHyv1UYTky0'
const CTHAT_ID = '-4860661034'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('contactForm').addEventListener('submit', function (e) {

  e.preventDefault()

  let message = 'Звявка с сайта\n' + 'Номер телефона: ' + this.phone.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('contactForm').reset()
  })


})
