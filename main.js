let toggle = document.getElementById('toggle');
let list = document.getElementById('items');
let active = false;


let clickHandler = () => {
    if (!active){
        list.setAttribute('class', 'active');
        toggle.setAttribute('class', 'activeToggle');
    } else {
        list.setAttribute('class', ' ');
        toggle.setAttribute('class', ' ');
    }

    active = !active;
}

// clickHandler();
toggle.addEventListener('click', clickHandler);

