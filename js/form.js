const TOKEN = ''
const CTHAT_ID = ''
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