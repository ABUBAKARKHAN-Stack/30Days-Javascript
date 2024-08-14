import { userDetailsLS } from "./userDetailsLS";

export const loginForm = (form, userName, passWord) => {
    const digitRegex = /(?=.*[0-9])/;
    const capitalLetterRegex = /(?=.*[A-Z])/;
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{1,}$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // Validate Username
        if (!userName.value || userName.value.trim() === '') {
            userName.style.border = '1px solid red';
            document.querySelector('.nameErrorText').textContent = 'Username is required.';
            valid = false;
        } else if (userName.value.length <= 6) {
            userName.style.border = '1px solid red';
            document.querySelector('.nameErrorText').textContent = 'Username must be longer than 6 characters.';
            valid = false;
        } else if (!digitRegex.test(userName.value)) {
            userName.style.border = '1px solid red';
            document.querySelector('.nameErrorText').textContent = 'Username must include at least one number.';
            valid = false;
        }

        if (!valid) {
            setTimeout(() => {
                userName.style.border = '1px solid transparent';
                document.querySelector('.nameErrorText').textContent = '';
            }, 1300);
        }

        // Validate Password
        if (!passWord.value || passWord.value.trim() === '') {
            passWord.style.border = '1px solid red';
            document.querySelector('.passErrorText').textContent = 'Password is required.';
            valid = false;
        } else if (!digitRegex.test(passWord.value)) {
            passWord.style.border = '1px solid red';
            document.querySelector('.passErrorText').textContent = 'Password must include at least one digit.';
            valid = false;
        } else if (!passwordRegex.test(passWord.value)) {
            passWord.style.border = '1px solid red';
            document.querySelector('.passErrorText').textContent = 'Password must include at least one special character.';
            valid = false;
        } else if (!capitalLetterRegex.test(passWord.value)) {
            passWord.style.border = '1px solid red';
            document.querySelector('.passErrorText').textContent = 'Password must include at least one uppercase letter.';
            valid = false;
        }

        if (!valid) {
            setTimeout(() => {
                passWord.style.border = '1px solid transparent';
                document.querySelector('.passErrorText').textContent = '';
            }, 1300);
        }

        // Stop execution if form is not valid
        if (!valid) return;

        // Get user details from the form
        const userDetails = { userName: userName.value.trim(), passWord: passWord.value.trim() };

        // Clear the input fields
        userName.value = '';
        passWord.value = '';

        // Store user details in localStorage
        let userDetailsArr = userDetailsLS(userDetails);

        // Update localStorage with the new user details array
        localStorage.setItem('userData', JSON.stringify(userDetailsArr));
    });
};
