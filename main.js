let toggle = document.getElementById('toggle');
let list = document.getElementById('items');
let active = false;


let clickHandler = () => {
    if (!active){
        list.setAttribute('class', 'active');
    } else {
        list.setAttribute('class', ' ');
    }

    active = !active;
}

// clickHandler();
toggle.addEventListener('click', clickHandler);

