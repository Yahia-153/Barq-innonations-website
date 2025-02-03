
const jobsFile = await fetch('../api/jobs.json');
const jobs = await jobsFile.json();
const jobId  = window.location.hash.substring(1);
const jobsData = jobs.jobsData;
const job = jobsData.find(job => job.id === jobId);
const pageContainer = document.getElementById('pageContainer');
const pageTemplet = `
            <div class="title border-bottom border-1 border-primary pb-5 pt-3 col-10 mx-auto">
          <h1 class="text-center text-primary fw-bold fs-1 mb-4">${job.title}</h1>
          <p class="text-center text-info-white fs-5">${job.location} , ${job.type} , ${job.level}</p>
        </div>
        <div class="container col-10 mx-auto p-4 pt-5" id="${job.id}">
          <div class="row row-cols-1 row-cols-md-2 g-4 border-bottom border-1 border-primary mb-4">
              <div class="col col-md-9">
                  <div class="description mb-5">
                      <h2 class=" text-primary fw-bold fs-3 mb-3 text-capitalize">Description</h2>
                      <p class="fs-6 ps-2">${job.description}</p>
                  </div>
                  <div class="requirements mb-5">
                      <h2 class=" text-primary fw-bold fs-3 mb-3 text-capitalize">requirements</h2>
                      <ul>
                      ${job.requirements.map(requirement => `<li class="fs-6 ps-2 mb-2"> ${requirement} </li>`).join('')}
                      </ul>
                  </div>
                  <div class="benefits mb-5">
                      <h2 class=" text-primary fw-bold fs-3 mb-3 text-capitalize">benefits</h2>
                      <ul>
                      ${job.benefits.map(benefit => `<li class="fs-6 ps-2 mb-2"> ${benefit} </li>`).join('')}
                      </ul>
                  </div>
                  
              </div>
              <div class="col col-md-3 ">
                <div class="content p-3 pt-4 sticky-top">
                  <button class="button-primary rounded active col-12 justify-content-around" style="height: 50px;" onclick="window.scrollTo({top: document.body.scrollHeight})" ><span>Apply Now</span> <i class="bi bi-arrow-up-right ms-2 fw-bold"></i></button>
                  <div class="share p-3">
                    <i class="bi bi-link-45deg fs-4 text-primary fw-bold" style="cursor: pointer;" id="copyBtn"></i>
                  </div>
                </div>
              </div>
          </div>
          <div class="apply-form" id="applyForm">
            <div class="title">
              <h1 class="text-center text-primary fw-bold fs-1 mb-4">Apply Now</h1>
            </div>    
            <form action="" method="post" class="d-grid gap-4">
              <div class="row row-cols-1 row-cols-md-2 g-4 g-lg-auto">
              <input type="hidden" name="ID" value="${job.id}">
              <input type="hidden" name="Title" value="${job.title}">
              <input type="hidden" name="Location" value="${job.location}">
              <input type="hidden" name="level" value="${job.level}">
              <input type="hidden" name="type" value="${job.type}">
                  <div class="col">
                      <label for="qouteName" class="form-label ms-3">Name</label>
                      <input type="text" class="form-control font-neometric" id="qouteInputName" name="name">        
                  </div>
                  <div class="col">
                      <label for="qoutePhone" class="form-label ms-3">Phone</label>
                      <input type="number" class="form-control font-neometric" id="qouteInputPhone" name="phone">        
                  </div>
              </div>
              <div class="col-12">
                  <label for="qouteEmail" class="form-label ms-3">Email</label>
                  <input type="email" class="form-control font-neometric" id="qouteInputEmail" name="email">        
              </div>
              
              <div class="col-12">
                <label class="form-label" for="customFile">Resume</label>
                <input type="file" class="form-control font-neometric" id="" />            
              </div>
              <div class="col-12">
                <button type="" class="btn-primary-changed active rounded mx-auto">Apply</button>
              </div>
          </form>
          </div>
        </div>

`;
 pageContainer.innerHTML = pageTemplet;
 document.getElementById("copyBtn").addEventListener("click", () => {
    const pageUrl = window.location.href;

    navigator.clipboard.writeText(pageUrl)
        .then(() => alert("🔗 Link copied to clipboard!"))
        .catch(err => console.error("Failed to copy:", err));
});