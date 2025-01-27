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
    
    projectsFolders.forEach((foldername) => {
        let folderPath = `projects/${foldername}`;
        let projectContentPath = `${folderPath}/content.json`;
        fetch(projectContentPath)
        .then((response) => response.json())
        .then((projectContent) => {
            console.log(projectContent);
        });
});
})
  