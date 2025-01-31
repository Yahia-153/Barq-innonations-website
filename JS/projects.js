async function fetchProjectsData() {
    try {
          const response = await fetch('../api/projects.json');
          return await response.json();
  
      } catch (error) {
          console.error('Error fetching folders:', error);
          return [];
      }
  }
let projectsFolders = []
fetchProjectsData()
.then((projects)=>{
    projects.forEach(project => {
       projectsFolders.push(project); 
    });
    const projectsSec = document.getElementById('projectsSec');
    projectsFolders.forEach((foldername) => {
        let folderPath = `projects/${foldername}`;
        let projectContentPath = `${folderPath}/content.json`;
        fetch(projectContentPath)
        .then((response) => response.json())
        .then((projectContent) => {
            let projectCard = `
                <div class="col p-3 ">
                    <div class="priject-card bg-WD py-3 rounded-4 border-primary-changed shadow">
                        <div class="start row m-0 p-0  row-cols-1 ">
                            <div class="col rounded">
                                <img src="${folderPath}/imgs/main.png" class="rounded-2 border-primary-changed col-12">
                            </div>
                            <div class="col p-3 catigories row-cols-md-1 ">
                                <p class="btn-primary-changed fixed text-center p-2  rounded-4 m-0" style="font-size: .75rem;" >${projectContent.catigories}</p>
                            </div>
                        </div>
                        <div class="end row m-0 mt-3 px-3 row-cols-1">
                            <div class="col">
                                <h3 class="fs-5 text-primary-changed ">${projectContent.name}</h3>
                                <p class="fs-6 text-info-white">${projectContent.client}</p>
                            </div>
                            <div class="col p-1 d-grid align-items-center">
                                <button class="btn-primary-changed active col-12 rounded" onclick="window.location='project.html#${projectContent.name}';" >view case</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            projectsSec.innerHTML += projectCard;
        });
});
})
