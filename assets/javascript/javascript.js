
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=article&api-key=Bou4rvwA3vqrCSX1Na5tt0RPp0TIgAUk";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (res) {
    var results = res.response.docs;
    console.log(results);
    // console.log(res);
    // // var records =
    for (var i = 0; i < results.length; i++) {
        var year = $("<h1>");
        $("#results").text(results[i].pub_date);
        var endYear = $("<h2>");
        $("#endResults").text(results[i].pub_date);
    }
});
//   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    //   $.ajax({
    //   url: queryURL,
    //   method: "GET",
    //   data :{
    //       q: ,
    //       api_key: "Bou4rvwA3vqrCSX1Na5tt0RPp0TIgAUk",
    //       limit: 5,
    //   }
    // }).then(function(response) {
    //     console.log(response);
    //   var tBody = $("tbody");
    //   var tRow = $("<tr>");
    //   // Methods run on jQuery selectors return the selector they we run on
    //   // This is why we can create and save a reference to a td in the same statement we update its text
    //   var titleTd = $("<td>").text(response.Title);
    //   var yearTd = $("<td>").text(response.Year);
    //   var actorsTd = $("<td>").text(response.Actors);
    //   // Append the newly created table data to the table row
    //   tRow.append(titleTd, yearTd, actorsTd);
    //   // Append the table row to the table body
    //   tBody.append(tRow);
    // });
    </script >