console.log("ksksks")

        
        function suma(){
          const formulario = document.getElementById("formulario")
          let opA = formulario["operandoA"];
          let opB = formulario["operandoB"];
          let operacion = parseInt(opA.value) + parseInt(opB.value);
          document.getElementById("respuesta").innerHTML = "Resultado: " + operacion;
          console.log("Resultado: " + operacion)
          if(isNaN(operacion)){
            operacion= "NO hay números mmhuevo"
            document.getElementById("respuesta").innerHTML ="Resultado: " +  operacion;
            console.log("Resultado: " + operacion)
          } 

        }
        function resta(){
          const formulario = document.getElementById("formulario")
          let opA = formulario["operandoA"];
          let opB = formulario["operandoB"];
          let operacion = parseInt(opA.value) - parseInt(opB.value);
          document.getElementById("respuesta").innerHTML = "Resultado: " + operacion;
          console.log("Resultado: " + operacion)
          if(isNaN(operacion)){
            operacion= "NO hay números mmhuevo"
            document.getElementById("respuesta").innerHTML ="Resultado: " +  operacion;
            console.log("Resultado: " + operacion)
     }}
        function multiplicar(){
      
          const formulario = document.getElementById("formulario")
          let opA = formulario["operandoA"];
          let opB = formulario["operandoB"];
          let operacion = parseInt(opA.value) * parseInt(opB.value);
          document.getElementById("respuesta").innerHTML = "Resultado: " + operacion;
          console.log("Resultado: " + operacion)
          if(isNaN(operacion)){
            operacion= "NO hay números mmhuevo"
            document.getElementById("respuesta").innerHTML ="Resultado: " +  operacion;
            console.log("Resultado: " + operacion)
     } }
        function dividir(){
      
          const formulario = document.getElementById("formulario")
          let opA = formulario["operandoA"];
          let opB = formulario["operandoB"];
          let operacion = parseInt(opA.value) / parseInt(opB.value);
          document.getElementById("respuesta").innerHTML = "Resultado: " + operacion;
          console.log("Resultado: " + operacion)
          if(isNaN(operacion)){
            operacion= "NO hay números mmhuevo"
            document.getElementById("respuesta").innerHTML ="Resultado: " +  operacion;
            console.log("Resultado: " + operacion)
     }}
    
 
        //usamos el .valueAssNumber para convertir a numero, pero también se usa un parseInt