import { userDetailsLS } from "./userDetailsLS";

export const loginForm = (form, userName, passWord) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!userName.value || userName.value === '') {
            userName.style.border = '1px solid red'
            document.querySelector('.nameErrorText').textContent = 'Please Enter username'
            setTimeout(() => {
                userName.style.border = '1px solid transparent'
                document.querySelector('.nameErrorText').textContent = ''
            }, 1000);
        }
        // Get user details from the form
        const userDetails = { userName: userName.value, passWord: passWord.value };

        // Clear the input fields
        userName.value = '';
        passWord.value = '';

        // Store user details in localStorage
        let userDetailsArr = userDetailsLS(userDetails);

        // Update localStorage with the new user details array
        localStorage.setItem('userData', JSON.stringify(userDetailsArr));
    });
};