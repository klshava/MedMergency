// These are words/phrases the user could type in

const trigger = [
  ['hi', 'hey', 'hello', 'good morning', 'good afternoon'],
  ['how are you'],
  ['i would like to discuss the results of my questionaire', 'what medication do you recommend for my diagnosis', 'Do i need to come for a face to face consultation'],
  ['When are you available for consultation'],
  ['Thank you i will see you then'],
  ['Thank you for your services']

]

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [
  ['Hello!', 'Hi!', 'Hey!', 'Hi there!'],
  [
    'good thanks and how are you?',
    'Fantastic, how are you?'
  ],
  ['Alright can i please get your name'],
  ['From you Questionaire results i would Recomend that you go to your nearest phamarcy and get you iron pills, These do not require a prescription. please feel free to comeback if you condition does not improve'],
  ['Yes, your condition is quite critical please keep calm medical assistance is on its way', 'No, the is no need head to your nearest pharmacy and get you medication'],
  ['Tommorow afternoon at 14:30', 'Unavailable, fully booked'],
  ['Alright in the mean while please get someone closeby to monitor your conditions']
]

// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
  'Alright, you can go ahead with your question',
  'Im listening...'
]

// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ['Please stay home']

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('input')
  inputField.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      const input = inputField.value
      inputField.value = ''
      output(input)
    }
  })
})

function output (input) {
  let product

  // Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, '')

  // For example 'tell me a story' becomes 'tell me story'
  // Or 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, ' ')
    .replace(/i feel /g, '')
    .replace(/whats/g, 'what is')
    .replace(/please /g, '')
    .replace(/ please/g, '')

  // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text)
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)]
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)]
  }

  // update DOM
  addChat(input, product)
}

function compare (triggerArray, replyArray, string) {
  let item
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x]
        item = items[Math.floor(Math.random() * items.length)]
      }
    }
  }
  return item
}

function addChat (input, product) {
  const mainDiv = document.getElementById('main')
  const userDiv = document.createElement('div')
  userDiv.id = 'user'
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`
  mainDiv.appendChild(userDiv)

  const botDiv = document.createElement('div')
  botDiv.id = 'bot'
  botDiv.innerHTML = `Doctor: <span id="bot-response">${product}</span>`
  mainDiv.appendChild(botDiv)
  speak(product)
}

const synth = window.speechSynthesis
const voices = synth.getVoices()

function speak (string) {
  const u = new SpeechSynthesisUtterance(string)
  u.text = string
  u.lang = 'en-US'
  u.volume = 1 // 0-1 interval
  u.rate = 1
  u.pitch = 1 // 0-2 interval
  synth.speak(u)
  debugger
}
