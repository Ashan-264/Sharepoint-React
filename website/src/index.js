import _ from  'lodash';
import './style.css';
import myImage from './dragon.jpg';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var aNewImage = new Image();
    aNewImage.src = myImage;
    element.appendChild(aNewImage);
    
    return element;
}

document.body.appendChild(component());