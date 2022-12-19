function calculateRectangleArea(length, width) {
  let rectangleResult = length * width;
  if (length > 0 && width > 0) {
    return rectangleResult
  } else {
    return "undefined";
  }
}

function calculateTriangleArea(base, height) {
  let triangleResult = (base * height) / 2;
  if (base > 0 && height > 0) {
    return triangleResult
  } else {
    return "undefined";
  }
}


function calculateCircleArea(radius) {
  let circleResult = Math.PI * radius * radius;
  if (radius > 0) {
    return circleResult;
  } else {
    return "undefined";
  }
}


console.log(calculateRectangleArea(10, 5));     
console.log(calculateRectangleArea(1.5, 2.5));  
console.log(calculateRectangleArea(10, -5));    