// Codigo del cuadrado
console.group("Cuadrados");
  // const ladoCuadrado = 5;
 // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
  return lado * 4;  
}
   //  console.log("El peremitro del cuadrado es: " +  perimetroCuadrado + "cm");
    
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
  
function areaCuadrado(lado) {
      return lado * lado;
  } 
// console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
    //console.log("Los lados del triangulo miden: " 
    //+   ladoTriangulo1
    //+   "cm, " 
    //+   ladoTriangulo2
    //+   "cm, "
    //+   baseTriangulo
    //+   "cm, "
 
    //const alturaTriangulo1 = 5.5;
    //console.log("La altura del triangulo es de: " + alturaTriangulo1 + "cm");   

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
       // console.log("El perimetro del cuadrado es: " + perimetroTriangulo + "cm");  

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
       // console.log("El area del triangulo es: " + areaTriangulo + "cm²");
    
        //console.groupEnd();


    // Codigo del Circulo 

    console.group("Circulos");

 
    // Radio
    // const radioCirculo = 4;
    // console.log("El radio del circulo es: " + radioCirculo + "cm");
 
    // Diametro
    function diametroCirculo(radio) {
        return radio * 2;
    }
    
    // PI
    const PI = Math.PI; 
    console.log("El PI es: " + PI);

    // Circunferencia
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    // Area
   
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }
    // console.log("El area del circulo es: " + areaCirculo + "cm²");
    
    console.groupEnd();  


    // Aqui interactuamos con el html 
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }

    function calcularAreaCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        
        const area = areaCuadrado(value);
        alert(area);
    }