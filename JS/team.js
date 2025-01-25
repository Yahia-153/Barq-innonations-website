async function fetchTeamData() {
  try {
        const response = await fetch('http://localhost:3000/');
        return await response.json();
    } catch (error) {
        console.error('Error fetching folders:', error);
        return [];
    }
}
const teamCardsSection = document.querySelector('#teamCards');
fetchTeamData()
.then((teamMembers) => {
  teamMembers.forEach((foldername) => {
    let positioFirstChart = foldername.indexOf('(') + 1;
    let positionLastChart = foldername.indexOf(')') - 1;
    let name = foldername.slice(0, positioFirstChart - 1);
    let position = foldername.slice(positioFirstChart, positionLastChart + 1);
    const folderPath = `team/${foldername}`;
    let memberObj={
        name: name,
        position: position,
        folderPath: folderPath
    }
    let memberCard = `
        <div class="col-3 p-0 card team-member text-start bg-white-dark shadow  ">
            <img src="${memberObj.folderPath}/main.png" class="card-img-top">
            <img src="${memberObj.folderPath}/hover.png" class="card-img-top hover">
            <div class="card-body">
              <p class="card-subtitle fs-6 text-info-white">${memberObj.position}</p>
              <h5 class="card-title fs-4 mt-2 text-primary text-uppercase">${memberObj.name}</h5>
            </div>
          </div>
    `
    console.log(memberCard);
    teamCardsSection.innerHTML += memberCard;
  });
});
