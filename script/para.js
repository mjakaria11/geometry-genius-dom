
// console.log('para-length')

function calculateParallelogram() {
  const inputLength = document.getElementById('para-length');
  const lengthText = inputLength.value;
  const length = parseFloat(lengthText);
  console.log(length);


  const inputWidth = document.getElementById('para-width');
  const widthText = inputWidth.value;
  const width = parseFloat(widthText);
  console.log(width);

  area = length * width;
  console.log('Area of the triangle is :', area);
  

  const paraArea = document.getElementById('para-area');
  paraArea.innerText = area;
}