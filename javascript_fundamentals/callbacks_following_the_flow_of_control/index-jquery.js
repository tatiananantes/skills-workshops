// something small - 1GB
$.get("https://async-workshops-api.herokuapp.com/test", (peopleResponse) => {
  console.log("first")
});

// something big - 1KB
$.get("https://async-workshops-api.herokuapp.com/people", (peopleResponse) => {
  console.log("second")
});



























// $( document ).ready(() => {
//   console.log("hello again");
//   $('#spin-button').on('click', () => {
//     $('#spinner').text("Like a record.")
//   })
// });