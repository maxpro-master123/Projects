var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
  };
  
  console.log(teclas);
  
  document.addEventListener("keyup", dibujarTeclado);
  
  function dibujarTeclado(evento)
  {
    if(evento.keyCode == teclas.UP) 
  {
  console.log("Vamo pa arriba");
  }

  switch(evento.keyCode)
  {
    case teclas.UP:
    console.log("arriba");
    break;
    case teclas.DOWN:
    console.log("abajo");
    break;  
    default:
    console.log("otra tecla");
    break;
  }
}