let header = document.createElement('header');
document.body.append(header);
header.classList.add('header');
header.innerHTML = `
  <nav>
    <ul style="display: flex; gap: 100px; list-style-type: none; justify-content: center;">
      <li><a href="" style="text-decoration: none; color: black;">Home</a></li>
      <li><a href="" style="text-decoration: none; color: black;">About</a></li>
      <li><a href="" style="text-decoration: none; color: black;">Contact</a></li>
    </ul>
  </nav>
`;

let img = document.createElement('img');
let wrapper = document.createElement('div');
document.body.append(wrapper);
wrapper.append(img);
wrapper.style = 'max-width: 800px; margin: 0 auto;';
img.src = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';
img.style = 'display: block; margin: 0 auto; width: 100%;';

let para = document.createElement('p');
wrapper.append(para);
para.style = 'text-align: center;';
para.textContent =
  'above is an img of an img tag inside of an img tag rendered thorugh js';
