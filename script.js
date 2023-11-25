function secondLargest(data) {
   data.sort(function(a, b) {
     return b - a;
   });
   return data[1];
 }
 console.log(secondLargest([44, 55, 66, 79, 88])); 
 console.log(secondLargest([10, 30, 86, 60, 90]));  
 console.log(secondLargest([67, 22, 19, 12, 80]));