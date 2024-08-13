import './style.css'
import { passWordToggle } from './passWordToggle'
const togglePassword = document.querySelector('#togglePassword')
const passWord = document.querySelector('#password')
passWordToggle(togglePassword, passWord)

import { loginForm } from './loginForm'
const form = document.querySelector('form')
const userName = document.querySelector('#userName')
loginForm(form, userName, passWord)
