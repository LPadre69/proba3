class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    set nombre(nombre){
        return this._nombre = nombre
    }
    set apellido(apellido){
        return this._apellido = apellido
    }
}

const personas = [
    new Persona("Puto el que", "lo lea"),
    new Persona("Puto el que", "lo siga leyendo"),
    new Persona("Por que lo ", "sigues leyendo?")
]
function mostrarPersonas(){
    console.log("Mostrando personas en ejecución");
    let texto = " ";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}
function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"]
    if(nombre.value != "" && apellido.value != ""){
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    forma["nombre"].value = "";
    forma["apellido"].value = "";
}
    else{
        console.log("nah")
    }
}