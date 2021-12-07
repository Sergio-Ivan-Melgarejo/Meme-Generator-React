import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  };

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  };

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  };

  const onClickExportar = function(){
    if((!linea1 == "" || !linea2 == "") && !imagen == ""){
      html2canvas(document.querySelector("#meme")).then(canvas => {
        let img = canvas.toDataURL("image/png");
        let link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();
      });
    }
  };

  return (
    <div className="App">

    <div className="creando">    
      <select className="select-img" onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
        <option value="imagen1">Atardecer</option>
        <option value="imagen2">Auto PX</option>
        <option value="imagen3">Maraton</option>
      </select>
      <input className="linea1C" onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input>
      <input className="linea2C" onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input>
      <button onClick={onClickExportar} className="btaExportar">Descargar</button>
    </div>

    <div className="resultado" id="meme">
      <span className="linea1R">{linea1}</span>
      <span className="linea2R">{linea2}</span>
      <img className="imagen" src={"/imagenes/" + imagen + ".jpg"} />
    </div> 

    </div>
  );
}

export default App;
