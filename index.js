import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap'

let words = [
  'After ', 'thorough ', 'deliberation ', 'Miss ', 'Universe ', 'Organization ', 'has ', 'decided ', 'to ', 'suspend ', 'Miss ', 'Brand ', 'immediately ', 'the ', 'Miss ', 'Universe ', 'Organization ', 'said ', 'in ', 'a ', 'statement ', 'to ', 'CNN. ', '“Miss ', 'Universe ', 'Organization ', 'will ', 'be ', 'taking ', 'over ', 'the ', 'Miss ', 'USA ', 'program ', 'while ', 'a ', 'comprehensive ', 'third-party ', 'investigation ', 'is ', 'conducted'
]
let btn = document.querySelectorAll('button')[0]

btn.addEventListener('click', () => {
  btn.innerHTML = words[Math.floor((Math.random() * words.length))].toLowerCase()
})