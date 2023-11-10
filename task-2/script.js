let data = [  
    {
        name: 'Rohan',
        age: 21
    },
    {
        name: 'Daniyal',
        age: 22
    },
    {
        name: 'Omar',
        age: 23
    }
];

let main = document.getElementById('main');

function renderData() {
    main.innerHTML = '';
    data.forEach(item => {
        const { name, age } = item;
        const container = document.createElement('div');
        container.innerHTML = `
            <h1>Name: ${name}</h1>
            <h1>Age: ${age}</h1>
        `;
        
        const deleteName = document.createElement('button');
        deleteName.innerText = 'Delete';
        deleteName.classList.add('delete');
        container.appendChild(deleteName);
        main.appendChild(container);
        
        deleteName.addEventListener('click', () => {
            data = data.filter(item => item.name !== name);
            renderData();
        });
    });
}

renderData(); 



