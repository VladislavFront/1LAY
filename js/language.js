const select = document.querySelector('.change-lang')
const allLang = ['ru', 'en']

const langArr = {
 
  "sub-title": {
    ru: '<span class="accent-text">Максимальная защита</span> <br> Ваших данных!',
    en: '<span class="accent-text">Maximum protection</span> <br> of Your data!',
  },

  "second-sub-title": {
    ru: 'Токен - ключ для чувствительной информации в мобильных устройствах',
    en: 'Token is the key to confidential information on mobile devices',
  },

  "btn-more": {
    ru: 'Узнать больше!',
    en: 'Find out more!',
  },

  "about-title": {
    ru: 'Как <span class="accent-text">это работает</span>',
    en: 'How <span class="accent-text">does this work</span>',
  },

  "about-text": {
    ru: 'Без USB и NFC. <br> Виртуальные клавиши под токеном <span class="accent-text">недоступны вирусам, перехватывающим клавиатуру и скриншоты</span>',
    en: 'Without USB and NFS. <br> Virtual keys under the token <span class="accent-text">are not accessible to viruses that intercept the keyboard and screenshots</span>',
  },

  "innovation-title": {
    ru: '<span class="accent-text">Уникальная</span> технология',
    en: '<span class="accent-text">Unique</span> technology',
  },

  "innovation-text": {
    ru: 'Токен обменивается <span class="accent-text">сигналами через экран,</span> проверяет мобильное устройство и <span class="accent-text">передаёт код доступа</span> к сохраненным данным и паролям.',
    en: 'The token exchanges <span class="accent-text">signals via the screen,</span> checks the mobile device and <span class="accent-text">transmits an access code</span> to stored data and passwords.',
  },

  "th-one": {
    ru: 'Преимущества',
    en: 'Advantages',
  },

  "th-two": {
    ru: 'Обычный токен',
    en: 'Regular token',
  },

  "td-title-1": {
    ru: 'Совместимость со всеми типами мобильных устройств',
    en: 'Compatible with all types of mobile devices',
  },

  "td-title-2": {
    ru: 'Защита от перехвата клавиатуры и скриншотов',
    en: 'Protection against keyboard interception and screenshots',
  },

  "td-title-3": {
    ru: 'Защита от перехвата связи с мобильными устройствами',
    en: 'Protection against interception of communication with mobile devices',
  },

  "td-title-4": {
    ru: 'Работа с электронной подписью',
    en: 'Working with an electronic signature',
  },

  "td-title-5": {
    ru: 'Удобство использования',
    en: 'Ease of use',
  },

  "td-title-6": {
    ru: 'Легкая настройка и резервирование',
    en: 'Easy setup and backup',
  },

  "td-title-7": {
    ru: 'Возможность работы офлайн',
    en: 'Possibility of working offline',
  },

  "form-title": {
    ru: 'Оставьте заявку и мы <span class="accent-text">свяжемся с Вами!</span>',
    en: 'Leave a request and we <span class="accent-text">will contact you!</span>',
  },

  "form-btn": {
    ru: 'Защитить мои данные',
    en: 'Protect my data',
  },

}

select.addEventListener('change', changeURLlanguage)

function changeURLlanguage() {
  let lang = select.value
  location.href = window.location.pathname + '#' + lang
  location.reload()
}

function changeLanguage() {
  let hash = window.location.hash
  hash = hash.substr(1)
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ru'
    location.reload()
  }
  select.value = hash
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key)
    if (elem) {
      elem.innerHTML = langArr[key][hash]
    }
  }
}

changeLanguage()






















// function checkPagePathName() {

//   switch (currentPathName) {

//     case '/index.html':
//       currentText = homeTexts
//       break;

//     default:
//       currentLang = homeTexts
//       break
//   }
  
// }

// checkPagePathName()

// function changeLang() {
  
//   for (const key in currentText) {
//     const elem = document.querySelector(`[data-lang=${key}]`)
//     if (elem) {
//       elem.textContent = currentText[key][currentLang]
//     }
//   }

// }

// changeLang()

// langBtns.forEach((btn => {
//   btn.addEventListener('click', (event) => {
//     currentLang = event.target.dataset.btn
//     btn.classList.add('lang-btn-active')
//     changeLang()
//   })
// }))