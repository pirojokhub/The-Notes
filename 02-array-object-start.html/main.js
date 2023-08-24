const inputTitle = document.querySelector('#title');
const BtnCreat = document.querySelector('#create');
const userList = document.querySelector('#list');

BtnCreat.addEventListener('click', BtnCreatUser);
userList.addEventListener('click', BtnChangeStistus)

// const notes = ['Доделать проект до конца','Сделать задачи'];

// function renderList(){
//     //Обычный вариант описание 1
//     // for(let i = 0; i < notes.length; i++){
//     //     userList.insertAdjacentHTML('beforeend',
//     //  getNoteTemplate(notes[i]));
//     // };

//     //Современный вариант описание 2
//     for(let not of notes){
//         userList.insertAdjacentHTML('beforeend',
//      getNoteTemplate(not));
//     }


//     /*
//      userList.insertAdjacentHTML('beforeend',
//      getNoteTemplate(notes[0]));

//      userList.insertAdjacentHTML('beforeend',
//      getNoteTemplate(notes[1]));
//      */
// }
// renderList()

// function BtnCreatUser(){
//     if(inputTitle.value === ''){
//         return
//     }
//   userList.insertAdjacentHTML('beforeend',
//    getNoteTemplate(inputTitle.value));

//     inputTitle.value = ''
// }

// function getNoteTemplate(title){
//     return `
//         <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//     `
// }

const notes = [
    {
        title:'Доделать проект до конца',
        complete:false,
    },{
        title:'Сделать задачи',
        complete:false,
    },
];

function renderList(){
    userList.innerHTML = ''; 
    for(let i = 0; i < notes.length; i++){
        userList.insertAdjacentHTML('beforeend',
        getNoteTemplate(notes[i], i));
    };
}

renderList()

function BtnCreatUser(){
    if(inputTitle.value === ''){
        return
    }

    const newnote = {
        title: inputTitle.value,
        complete: false,
    }

    notes.push(newnote);
    renderList()
    inputTitle.value = '';
}

function BtnChangeStistus(event){
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;

        if(type === 'toggle'){
            notes[index].complete = !notes[index].complete
            renderList()
        }else{
            notes.splice(index, 1);
            renderList()
        }
    }
}


function getNoteTemplate(not, index){
    return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class = "${not.complete ? 'text-decoration-line-through' : ''}">${not.title}</span>
            <span>
                <span class="btn btn-small btn-${not.complete ? 'warning' : 'success'}"
                data-type ="toggle"  data-index ="${index}">&check;</span>
                <span class="btn btn-small btn-danger" 
                data-type ="remove"  data-index = "${index}">&times;</span>
            </span>
        </li>
    `
}