import "./style.css";
const element = document.createElement("header");

element.innerHTML = "It's Webpack created by Demons";
element.classList.add('info')
document.body.appendChild(element);

// an extra comment

import photo from '../../assets/pyramid.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="50px"
img.style.height="40px"
element.appendChild(img);





