let ol = document.querySelector(".list");
let btn = document.querySelector(".btn_add");
let input = document.querySelector(".input_add");

let users = [
    {
        id: 1,
        userName: 'Behruz',
        imgDel: 'https://th.bing.com/th/id/R.27299b1faed2d63a3e9512bd8cd187ad?rik=%2fVRT3CdCaWVC3w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdelete-button-png-delete-icon-1600.png&ehk=mRIiUoExO9FPzeoYwqDk%2bfWDlxlcYGmfTbaQ2Pbwyak%3d&risl=&pid=ImgRaw&r=0'
    }
];


let DeleteFunction = (index) => {
    users.splice(index, 1)
    ol.innerHTML = ''
    ReadUsers()
}


let EditFunction = (index) => {
    let newName = prompt('Isim kirit')

    if (newName !== null) {
        users[index].userName = newName
        ol.innerHTML = ''
        ReadUsers(index)
    }


}


let ReadUsers = () => {
    users.forEach((v, index) => {
        let li = document.createElement('li');
        li.style.display = 'flex';
        li.style.width = '70%';
        li.style.justifyContent = 'space-between';
        li.style.backgroundColor = ''
        li.innerHTML = `<p>${v.id}</p> <p>${v.userName}</p>  <img onclick ='DeleteFunction(${index})' src='${v.imgDel}'/> <button onclick='EditFunction(${index})'>edit</button> `;
        ol.appendChild(li);
    });
};

ReadUsers();

btn.addEventListener('click', () => {
    ol.innerHTML = '';
    let obj = {
        id: users.length + 1,
        userName: input.value,
        imgDel: 'https://th.bing.com/th/id/R.27299b1faed2d63a3e9512bd8cd187ad?rik=%2fVRT3CdCaWVC3w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdelete-button-png-delete-icon-1600.png&ehk=mRIiUoExO9FPzeoYwqDk%2bfWDlxlcYGmfTbaQ2Pbwyak%3d&risl=&pid=ImgRaw&r=0'
    };

    input.value = '';
    users.push(obj);
    ReadUsers();
});
