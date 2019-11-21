import _ from 'lodash';
import './style.css';
import Logo from './logo.svg';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Logo;

    element.appendChild(myIcon);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// Babel demo
const int_arr = [1, 2, 3].map((n) => n + 1);
document.write(int_arr);