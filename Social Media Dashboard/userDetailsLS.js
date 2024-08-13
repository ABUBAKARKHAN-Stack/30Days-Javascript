export const userDetailsLS = (userDetails) => {
    let storedUsers = localStorage.getItem('userData')
    storedUsers = storedUsers ? JSON.parse(storedUsers) : []
    storedUsers.push(userDetails)
    return storedUsers
};