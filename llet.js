// Fase 1 Array con mi nombre:

let nom = prompt("Introduce tu nombre", "Baron Humbert von Gikkingen");
let tam = nom.length;
let nombre = [];
nombre = arraynom(nom);
function arraynom(nom) {
    for(i = 0; i < tam; i++){
    let letra = nom.substr(i, 1);
    nombre.push(letra);
    }
    return nombre;
  }

for (i = 0; i < tam ; i++){
    console.log(nombre[i]);
}

// Fase 2: 

for (i = 0; i < tam ; i++){
    let may = nombre[i].toUpperCase();
    if (may == "A" || may == "E" || may == "I" || may == "O" || may == "U" ){
        console.log("He trovat la vocal " + nombre[i]);
    }
    // else if(nombre[i] == 0 || nombre[i] == 1 || nombre[i] == 2 || nombre[i] == 3 || nombre[i] == 4 || nombre[i] == 5 || nombre[i] == 6 || nombre[i] == 7 || nombre[i] == 8 || nombre[i] == 9 ){
    //     console.log("Els noms no contenen el número "+ nombre[i]);
    // }
    else if ( isNaN(nombre[i]) === false) {  
        console.log("Cap nom te el número " + nombre[i]);
    }
    else {
        console.log("He trobat la consonant " + nombre[i]);
    }
}

//  Fase 3:
    
    // Creo un Map vacío
    var nommap = new Map();
    
    for (var i = 0; i < tam; i++){
        
      // Si el nommap tiene esa letra, se le suma 1 
      if(nommap.has(nombre[i]) == true){
          nommap.set(nombre[i], nommap.get(nombre[i]) + 1);
        //  Si esa letra no está en el Map, se añade con valor 1
        }else{
            nommap.set(nombre[i], 1);
        }
    }        
    console.log(nommap);


// Fase 4:

// Crea un apellido en un array
let cognom = prompt("Introduce tu apellido", "Murakami");
let tama = cognom.length;
let apellido = [];
apellido = arraycognom(cognom);
function arraycognom(cognom) {
    for(i = 0; i < tama; i++){
    let letra = cognom.substr(i, 1);
    apellido.push(letra);
    }
    return apellido;
  }
console.log(apellido);

// Crea un array con el nombre y el apellido
let nomspace = nombre;
nomspace.push(" ");
let fullname = nomspace.concat(apellido);
console.log(fullname);



