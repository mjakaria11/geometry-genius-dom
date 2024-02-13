/* 
OBJECT : GET BASE HEIGHT Of triangle.
st. get base value

*/

function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  

  const triangleHeight = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeight.value;
  const height = parseFloat(triangleHeightText);
  

  const area = 0.5 * base * height; 
  console.log('Area of the triangle is :', area);
  
  // display traingle area 
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}
