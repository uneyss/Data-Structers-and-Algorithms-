/* 
    Count Objects
    Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to console

*/

let objects = [
    { x: 1, y: 1 },
    { x: 2, y: 8 },
    { x: 3, y: 10 },
    { x: 4, y: 4 },
    { x: 5, y: 2 },
  ];
  
  let objects2 = [
    { x: 1, y: 1 },
    { x: 2, y: 8 },
    { x: 5, y: 5 },
    { x: 4, y: 4 },
    { x: 10, y: 10 },
  ];
  
  function calculateObjects(obj) {
    let count = 0;
    obj.forEach((o) => {
      if (o.x == o.y) {
        count++;
      }
    });
    return count;
  }
  
  console.log("For First Object Matched :", calculateObjects(objects));
  console.log("For Second Object Matched :", calculateObjects(objects2));
  