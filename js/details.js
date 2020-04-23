const baseURL = "https://free-nba.p.rapidapi.com/";
const teamsURL = `${baseURL}teams/1`;

fetch(teamsURL, {
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
  const teamContainer = document.querySelector(".detail-container");
  let html = "";

  html += `
      <div class="detail-details">
          <h1>${results.abbreviation}</h1>
          <p>City: <span class="value" id="propertyName">${results.city}</span></p>
          <p>Conference: <span class="value" id="propertyName">${results.conference}</span></p>
          <p>Division: <span class="value" id="propertyName">${results.division}</span></p>
          <p>Full name: <span class="value" id="propertyName">${results.full_name}</span></p>
          <p>Name: <span class="value" id="propertyName">${results.name}</span></p>
      </div>
      `;

  teamContainer.innerHTML = html;
}

const title = document.querySelector("title");
title.innerText = "Atlanta Hawks";
