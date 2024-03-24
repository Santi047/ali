function suma() {
    alert("ALGORITMO QUE REALIZA UNA SUMA ENTRE 2 VALORES INGRESADOS POR EL USUARIO ")
    //declaracion de variables necesarias
    let a = 0;
    let b = 0;
    let s = 0;
    // capturamos los datos
    a = parseInt(prompt("Ingrese el primer valor"));
    b = parseInt(prompt("Ingrese el segundo valor"));
    //realizamos la operacion
    s = a + b;
    //dams el resultado o respuesta
    alert("El resultado de la suma es:" + s)
}

function op() {
    alert("ALGORITMO QUE REALIZA UNA SUMA, RESTA, MULTIPLICACION Y DIVISION ENTRE 2 VALORES INGRESADOS POR EL USUARIO ");
    //declaracion de variables necesarias
    let a = 0;
    let b = 0;
    let s = 0;
    let r = 0;
    let m = 0;
    let d = 0;
    // capturamos los datos
    a = parseInt(prompt("Ingrese el primer valor"));
    b = parseInt(prompt("Ingrese el segundo valor"));
    //realizamos la operacion
    s = a + b;
    r = a - b;
    m = a * b;
    d = a / b;
    //dams el resultado o respuesta
    alert("El resultado de la suma es:" + s)
    alert("El resultado de la resta es:" + r)
    alert("El resultado de la multiplicacion es:" + m)
    alert("El resultado de la division  es:" + d)
}

function cua() {
    alert("ALGORITMO QUE REALIZA EL CUADRADO DEL NUMERO INGRESADO POR EL USUARIO");
    //declaracion de variables necesarias
    let a = 0,
        c = 0;
    a = parseInt(prompt("Ingrese el valor"));
    c = a * a;
    alert("El resultado es" + c);
}

function areatriangulo() {
    alert("ALGORITMO QUE REALIZA EL AREA DEL TRIANGULO");
    let a = 0,
        b = 0,
        c = 0;
    a = parseInt(prompt("Ingrese la altura"));
    b = parseInt(prompt("Ingrese la base"));
    c = (a * b) / 2;
    alert("El resultado del área del triángulo es" + c);
}

function conversion() {
    alert("algoritmo que determine la conversion que determine las pulgadas, los kilometros, y los milimetros de un valor ingresado por el usuario dado en metros")

    let m = 0,
        k = 0,
        l = 0,
        p = 0;

    m = parseInt(prompt("Ingrese el valor a convertir en metros"));

    k = m / 1000;
    l = m * 1000;
    p = m * 39.37;

    alert("El resultado de la conversion a kilómetros es: " + k);
    alert("El resultado de la conversion a kilómetros es: " + l);
    alert("El resultado de la conversion a kilómetros es: " + p);

}

function mayor() {
    alert("Algoritmo que determina el mayor de los números ingresados");

    let N1, N2 = 0;
    N1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));

    if (N1 == N2) {
        alert("Los números son iguales");
    } else if (N1 > N2) {
        alert(N1 + " es mayor que " + N2);

    } else alert(N2 + " es mayor que " + N1);
}

function menor() {
    alert("Algoritmo que determina el número menor de tres");
    let N1, N2, N3 = 0;
    N1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));
    N3 = parseInt(prompt("INGRESE EL TERCER NUMERO"));

    if (N1 == N2 && N1 == N3) {
        alert("Los números son iguales");
    } else {
        let menor = N1;
        if (N2 < menor) {
            menor = N2;
        }
        if (N3 < menor) {
            menor = N3;
        }
        alert("El número menor es: " + menor);
    }
}
function promedio() {
    alert("ALGORITMO QUE CALCULA EL PROMEDIO DE NOTAS");
    let n1, n2, n3, promedio;
    n1 = parseFloat(prompt("Ingrese la primera nota"));
    n2 = parseFloat(prompt("Ingrese la segunda nota"));
    n3 = parseFloat(prompt("Ingrese la tercera nota"));
    promedio = (n1 + n2 + n3) / 3;
    alert("El promedio de las notas es: " + promedio.toFixed(2));
}

function descuento() {
    alert("ALGORITMO QUE CALCULA EL DESCUENTO EN COMPRAS");
    let total, descuento, totalConDescuento;
    total = parseFloat(prompt("Ingrese el total de la compra"));
    descuento = parseFloat(prompt("Ingrese el porcentaje de descuento"));
    totalConDescuento = total - (total * descuento / 100);
    alert("El total con descuento es: " + totalConDescuento.toFixed(2));
}

function salario() {
    alert("ALGORITMO QUE CALCULA EL SALARIO SEMANAL");
    let horasTrabajadas, salarioHora, salarioSemanal;
    horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas en la semana"));
    salarioHora = parseFloat(prompt("Ingrese el salario por hora"));
    salarioSemanal = horasTrabajadas * salarioHora;
    alert("El salario semanal es: " + salarioSemanal.toFixed(2));
}
