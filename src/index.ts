let vSuma: number[] = new Array(6);
let i: number = 0;
let v1: number[] = new Array(6);
v1[0] = 1;
v1[1] = 3;
v1[2] = 7;
v1[3] = 9;
v1[4] = 9;
v1[5] = 5;

let v2: number[] = new Array(6);
v2[0] = 6;
v2[1] = 9;
v2[2] = 2;
v2[3] = 5;
v2[4] = 9;
v2[5] = 4;

while (i < 6) {
  vSuma[i] = v1[i] + v2[i];
  console.log(
    "v1[" + v1[i] + "] + V2[" + v2[i] + "] = vSuma[" + vSuma[i] + "]"
  );
  i++;
}
