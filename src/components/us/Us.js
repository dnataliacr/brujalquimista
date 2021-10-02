import React from "react";

import "/us.css";

import img1 from '../../assets/us.png'
import ph1 from '../../assets/ph1.jpg'
import ph2 from '../../assets/ph2.jpg'
const Us = () => {
  return  <div className="us-body">
  <h1>Sobre nosotras</h1>
  <div className="us-intro" style={{ display: "flex" }}>
    <div>
      <img src={img1}  />
    </div>
    <div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        hendrerit massa ac accumsan gravida. Integer fringilla orci vitae
        fermentum fringilla. In finibus tincidunt volutpat. Nullam dapibus
        et elit condimentum venenatis. Fusce sodales sollicitudin ultrices.
        Praesent varius urna orci, vitae congue leo dapibus non. In hac
        habitasse platea dictumst. Aenean lobortis quis ipsum sed vulputate.
        Donec fringilla mi vitae ante vestibulum blandit. Nam convallis
        mattis massa. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Integer nec justo eu orci tempus
        sagittis non non est. Maecenas risus ipsum, tristique a posuere vel,
        mattis eu libero. Proin nisl nulla, ornare vel aliquet quis, lacinia
        quis urna. Ut tempor interdum augue ut tincidunt. Pellentesque sed
        orci cursus, pretium quam ut, laoreet nibh.
      </p>
    </div>
  </div>
  <div className="boxes" style={{ display: "flex" }}>
    <div className="box">
      <img src={ph1} alt="imagen" />
      <h2>Patricia Jaureguiberry</h2>
      <h3>Reikista</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        hendrerit massa ac accumsan gravida. Integer fringilla orci vitae
        fermentum fringilla. In finibus tincidunt volutpat. Nullam dapibus
        et elit condimentum venenatis. Fusce sodales sollicitudin ultrices.
        Praesent varius urna orci, vitae congue leo dapibus non. In hac
        habitasse platea dictumst. Aenean lobortis quis ipsum sed vulputate.
        Donec fringilla mi vitae ante vestibulum blandit. Nam convallis
        mattis massa. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Integer nec justo eu orci tempus
        sagittis non non est. Maecenas risus ipsum, tristique a posuere vel,
        mattis eu libero. Proin nisl nulla, ornare vel aliquet quis, lacinia
        quis urna. Ut tempor interdum augue ut tincidunt. Pellentesque sed
        orci cursus, pretium quam ut, laoreet nibh.
      </p>
    </div>
    <div className="box">
      <img src={ph2} alt="imagen" />
      <h2>Corina Pejo</h2>
      <h3>Reflexologa y masajista</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        hendrerit massa ac accumsan gravida. Integer fringilla orci vitae
        fermentum fringilla. In finibus tincidunt volutpat. Nullam dapibus
        et elit condimentum venenatis. Fusce sodales sollicitudin ultrices.
        Praesent varius urna orci, vitae congue leo dapibus non. In hac
        habitasse platea dictumst. Aenean lobortis quis ipsum sed vulputate.
        Donec fringilla mi vitae ante vestibulum blandit. Nam convallis
        mattis massa. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Integer nec justo eu orci tempus
        sagittis non non est. Maecenas risus ipsum, tristique a posuere vel,
        mattis eu libero. Proin nisl nulla, ornare vel aliquet quis, lacinia
        quis urna. Ut tempor interdum augue ut tincidunt. Pellentesque sed
        orci cursus, pretium quam ut, laoreet nibh.
      </p>
    </div>
  </div>
</div>
};


export default Us