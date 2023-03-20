const list_dompet = [
  1000000,
  -840000,
  500000,
  -160000,
];
let x = 0;
console.log('---------looping pake do-while------------');
do {
  console.log(list_dompet[x]);
  x++;
}
while (x < list_dompet.length)

console.log('---------looping pake while------------');
let y = 0;
while (y < list_dompet.length)
{
  console.log(list_dompet[y]);
  y++;
}

console.log('---------looping pake for------------');
for (let z = 0; z < list_dompet.length; z++)
{
  console.log(list_dompet[z]);
}


