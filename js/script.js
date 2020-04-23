fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "x-rapidapi-key": "129744e162msh094acde099c1df4p17e384jsn8da337a35eb3",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    loadResults(json);
  })
  .catch(function (error) {
    const heading = document.querySelector("h1");
    heading.innerHTML = "An error occured";
    console.log(error);
  });

function loadResults(results) {
  console.dir(results);

  const teamsContainer = document.querySelector(".card");
  let html = "";

  for (let i = 0; i < results.data.length; i++) {
    html += `
                        <div class="details">
                            <h4 class="name">${results.data[i].abbreviation}</h4>
                            <p><b>Full team name: </b>${results.data[i].full_name}</p>
                            <p><b>City: </b>${results.data[i].city}</p>
                            <a class="btn btn-primary" href="details.html?id=${results.data[i].id}">Details</a>
                        </div>
    `;
  }
  teamsContainer.innerHTML = html;
}
