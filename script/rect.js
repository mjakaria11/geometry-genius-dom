
function calculateRectangleArea() {
  const lengthInput = document.getElementById('rec-length');
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText);
  console.log(length)

  const widthInput = document.getElementById('rec-width');
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width)

  //  formula
  
  const area = length * width; console.log('Area of the rectangle is :', area);
  

  const areaRectangleSpan = document.getElementById('rectangle-area');
  areaRectangleSpan.innerText = area;
}

