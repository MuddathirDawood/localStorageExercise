document.querySelector('#addRecord').addEventListener('click',()=>{
    let RGB = document.querySelector('#RGB').value
    let colour = document.querySelector('#color');
    colour.style = `background-color: ${RGB}`;
})

let people = JSON.parse(localStorage.getItem('records')) ?
JSON.parse( localStorage.getItem('records')) : [
    {
        name: 'Muddathir',
        favouriteColour: 'rgb(0, 0, 255)',
    }
];
function addData() {
    people.push(
        {
            name: document.getElementById('name').value,
            favouriteColour: document.getElementById('RGB').value,
        }
    );

    localStorage.setItem('records',JSON.stringify(people));
}
document.querySelector('#addRecord').addEventListener('click', addData);

(function loadData() {
    console.table(people);
})();

document.querySelector('#delete').addEventListener('click',()=>{
    localStorage.removeItem('records');
    alert('Please refresh page to finsh delete process')
})