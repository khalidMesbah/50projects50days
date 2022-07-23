/* variables */
const result = document.getElementById(`result`);
const input = document.getElementById(`filter`);
/* functions */
const getUsers = async () => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=100`).then(res => res.json());
        const users = response.results;
        result.innerHTML = ``;
        users.forEach(user => {
            AddUser({ name: { first, last }, location: { city, country }, picture: { thumbnail } } = user);
        });
    } catch (error) {
        result.innerHTML = `Ooops, try again`;
        throw new Error(error);
    }
};
const AddUser = (user) => {
    const li = document.createElement(`li`);
    const img = document.createElement(`img`);
    img.src = user.picture.thumbnail;
    img.alt = user.name.first;
    li.appendChild(img);
    const userInfo = document.createElement(`div`);
    userInfo.classList.add(`user-info`);
    const h4 = document.createElement(`h4`);
    h4.textContent = user.name.first + ' ' + user.name.last;
    const p = document.createElement(`p`);
    p.textContent = user.location.city + ', ' + user.location.country;
    userInfo.appendChild(h4);
    userInfo.appendChild(p);
    li.appendChild(userInfo);
    result.appendChild(li);
};
const filterUsers = () => {
    const filterUserRegex = new RegExp(input.value, `gi`);
    const users = document.querySelectorAll(`#result li`);
    users.forEach(user => {
        const userName = user.children[1].children[0].textContent;
        if (filterUserRegex.test(userName)) user.classList.remove(`hide`);
        else user.classList.add(`hide`);
    });
};
/* initial users */
getUsers();
/* event listeners */
input.addEventListener(`input`, filterUsers);
