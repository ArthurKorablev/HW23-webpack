import jquery from "jquery";
import image from './assets/React-icon.png';
import './app.css';

console.log({jquery});

const pic = document.createElement('img');
pic.setAttribute('src', image);
document.body.append(pic);