document.querySelector('#addRecord').addEventListener('click',()=>{
    let rcode = document.querySelector('#rgbR').value;
    let gcode = document.querySelector('#rgbG').value;
    let bcode = document.querySelector('#rgbB').value;

    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }

    let colour = document.querySelector('#color');
    let value = 'rgb(' + rcode + ', ' + gcode + ', ' + bcode + ')';
    document.querySelector('#RGB').value = value; 
    colour.style = `background-color: ${value}`;
})

// localStorage.removeItem('records');
let people = JSON.parse(localStorage.getItem('records')) ?
JSON.parse( localStorage.getItem('records')) : [
    {
        name: 'Muddathir',
        favouriteColour: 'rgb(0, 0, 255)',
    }
];
function addData() {
    // e.preventDefault();
    people.push(
        {
            name: document.getElementById('name').value,
            favouriteColour: document.getElementById('RGB').value,
        }
    );
    // Save data to a localstorage
    localStorage.setItem('records',JSON.stringify(people));
}
document.querySelector('#addRecord').addEventListener('click', addData);
// Displaying data
(function loadData() {
    console.table(people);
})();