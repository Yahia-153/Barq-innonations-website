const titleInput = document.querySelector('#titleInput')
const locationInput = document.querySelector('#locationInput')
const levelInput = document.querySelector('#levelInput')
const typeInput = document.querySelector('#typeInput')
const jobsBody = document.querySelector('#jobsBody')
const jobsFile = await fetch('../api/jobs.json');
const jobs = await jobsFile.json();
jobs.jobsData.forEach((job) => {
    let jobTr = `
          <tr class=" text-nowrap">
            <td class="ps-4 py-3 job-title">${job.title}</td>
            <td class="py-3 job-level">${job.level}</</td>
            <td class="py-3 job-location">${job.location}</</td>
            <td class="py-3 job-type">${job.type}</</td>
            <td class="py-2 text-center"><button class="button-primary rounded active" onclick='window.location = "job.html#${job.id}"' >Apply <i class="bi bi-arrow-up-right ms-2 fw-bold"></i></button></td>
          </tr>
    ` ;
    jobsBody.innerHTML += jobTr;
});

function filterTable(){
    const titleFilter = titleInput.value.toLowerCase();
    const locationFilter = locationInput.value.toLowerCase();
    const levelFilter = levelInput.value.toLowerCase();
    const typeFilter = typeInput.value.toLowerCase();
    jobsBody.innerHTML = '';
    jobs.jobsData.forEach((job) => {
        if(job.title.toLowerCase().includes(titleFilter) && job.location.toLowerCase().includes(locationFilter) && job.level.toLowerCase().includes(levelFilter) && job.type.toLowerCase().includes(typeFilter)){
            let jobTr = `
            <tr class=" text-nowrap">
            <td class="ps-4 py-3 job-title">${job.title}</td>
            <td class="py-3 job-level">${job.level}</</td>
            <td class="py-3 job-location">${job.location}</</td>
            <td class="py-3 job-type">${job.type}</</td>
            <td class="py-2 text-center"><button class="button-primary rounded active" onclick ='window.location = "job.html#${job.id}"' >Apply <i class="bi bi-arrow-up-right ms-2 fw-bold"></i></button></td>
            </tr>
            `;
            jobsBody.innerHTML += jobTr;
        }
});}

titleInput.addEventListener('input' , filterTable);
locationInput.addEventListener('change' , filterTable);
levelInput.addEventListener('change' , filterTable);
typeInput.addEventListener('change' , filterTable);
