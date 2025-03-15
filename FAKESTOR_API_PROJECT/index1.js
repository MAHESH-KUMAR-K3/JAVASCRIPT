// var url="http://localhost:3000/Employees"
// var options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "id":1,
//         "name":"bhanu",
//         "rollno":990
//     })
// }
// fetch(url,options)
//   .then(response =>{
//     if(response.ok)
//         console.log("Data submited",
//             response.status, response.statusText
//         )
//   }
// )


// var url = "http://localhost:3000/Employees";
// var options = {
//     "method": "POST",
//     "headers": {
//         "Content-Type": "application/json"
//     },
//     "body": JSON.stringify({
//         "id": 1,
//         "name": "rajendra",
//         "rollno": 990
//     })
// };

// fetch(url, options)
//   .then(response => {
//     if (response.ok) {
//         console.log("Data submitted successfully",
//             response.status, response.statusText
//         );
//         return response.json();  // Parse JSON response if needed
//     } else {
//         return Promise.reject('Failed to submit data');
//     }
//   })
//   .then(data => {
//       // Handle the JSON response data here if needed
//       console.log("Response data:", data);
//   })
//   .catch(error => {
//       console.error("Error:", error);
//   });


// put the data
var url = "http://localhost:3000/Employees/2";
var options = {
    "method": "",
    "headers": {
    "Content-Type": "application/json"
    }
};

fetch(url, options)
  .then(response => {
    if (response.ok) {
        console.log("Data submitted successfully",response.status, response.statusText);
    }
  })
  .catch(error => {
      console.error("Error:", error);
  });

  