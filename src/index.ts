let vSuma: number[] = new Array(6);
let i: number = 0;
let v1: number[] = new Array(6);
let v2: number[] = new Array(6);

//pido los valores del primer arreglo
for (let cantidad = 0; cantidad < 6; cantidad++) {
  v1[cantidad] = Number(
    prompt("Primer arreglo: Ingrese el valor de la posicion " + (cantidad + 1))
  );
}
//pido los valores del segundo arreglo
for (let cantidad = 0; cantidad < 6; cantidad++) {
  v2[cantidad] = Number(
    prompt("Segundo arreglo: Ingrese el valor de la posicion " + (cantidad + 1))
  );
}

while (i < 6) {
  vSuma[i] = v1[i] + v2[i];
  console.log(
    "v1[" + v1[i] + "] + V2[" + v2[i] + "] = vSuma[" + vSuma[i] + "]"
  );
  i++;
}
