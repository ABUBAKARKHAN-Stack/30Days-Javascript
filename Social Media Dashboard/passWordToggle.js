export const passWordToggle = (togglePassword, passWord) => {
    togglePassword.addEventListener('click', () => {
        const eyeIcon = document.querySelector('.eyeIcon')
        if (passWord.type === 'password') {
            eyeIcon.src = '/assets/eyeOn.svg'
            passWord.type = 'text'
        } else {
            eyeIcon.src = '/assets/eyeOff.svg'
            passWord.type = 'password'
        }
    })
}