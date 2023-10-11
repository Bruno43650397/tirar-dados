function lanzarDado() {
    return Math.ceil(Math.random() * 6)+ 1;
  }
  
  function simularLanzamientoDeDados(cantidad) {
    return Array.from({lenght: cantidad},() => {
      const dado1 = lanzarDado();
      const dado2 = lanzarDado();
      return dado1 + dado2;
    });
    
  }

  function contarvecesqueaparece(resultados) {
    const conteo = {};
    resultados.forEach((resultado) => {
        if(conteo[resultado]) {
            conteo [resultado]++;
        }else{
            conteo[resultado]= 1;
        }
        
    });
return conteo;
   

  }

  const cantidadLanzamientos =prompt("Ingrese la cantidad a tirar el dado:");

   const resultados = simularLanzamientoDeDados( cantidadLanzamientos)
   const conteo = contarvecesqueaparece( resultados);
   
   console.table(resultados,["suma"])
   console.log()
   console.table(conteo,["suma", "Aparaciones"])