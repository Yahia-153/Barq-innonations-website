const hash = window.location.hash;
const projectName = hash.substring(1);
const projectPath = `../projects/${projectName}`
const projectPathHTML = `projects/${projectName}`
const projectContentFile = `${projectPath}/content.json`
const projectData = await fetch(projectContentFile);
const projectJson = await projectData.json();
const pageTemplte = `
<div class="row m-0 row-cols-1 row-cols-lg-2 gap-4 mb-5">
            <div class="d-grid gap-3 ">
                <h1 class="title text-primary-changed">${projectJson.name}</h1>
                <div class="row catigories gap-3" id="catigories">

                </div>
            </div>
            <div class="d-flex align-items-end  row justify-content-between">
                <a href="${projectJson.links.website}" class="btn btn-primary-changed p-2 rounded text-primary-dark py-2 px-3 fs-lg-6 w-auto d-flex align-items-center gap-2 " style="font-size: clamp(10px , 2.5vw , 17px);" ><i class="bi bi-globe2"></i> WebSite</a>
                <a href="${projectJson.links.googlePlay}" class="btn btn-primary-changed p-2 rounded text-primary-dark py-2 px-3 fs-lg-6 w-auto d-flex align-items-center gap-2 " style="font-size: clamp(10px , 2.5vw , 17px);" ><i class="bi bi-google-play"></i> Google Play</a>
                <a href="${projectJson.links.appStore}" class="btn btn-primary-changed p-2 rounded text-primary-dark py-2 px-3 fs-lg-6 w-auto d-flex align-items-center gap-2 " style="font-size: clamp(10px , 2.5vw , 17px);" ><i class="fa-brands fa-app-store"></i> App Store</a>

            </div>
        </div>
        <div class=" row row-cols-1 row-cols-md-2 px-3 mb-6">
            <div class="col">
                <h2 class="text-primary text-capitalize mb-3">about client</h2>
                <p class="text-info-white">${projectJson.client}</p>
            </div>
            <div class="col d-none d-md-grid ">
                <img src="${projectPathHTML}/imgs/logo.png" alt="${projectJson.name}" class="w-50 m-auto client-logo">
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 px-3 mb-6 row-gap-6">
            <div class="col">
                <h2 class="text-primary text-capitalize mb-3">challenges</h2>
                <ul class="text-info-white pe-3" id="challengesList">
                </ul>
            </div>
            <div class="col">
                <h2 class="text-primary text-capitalize mb-3">solutions</h2>
                <ul class="text-info-white" id="solutionsList">
                </ul>
            </div>
            
        </div>
        <div class="row row-cols-1 row-cols-md-2 px-3 mb-6">
            <div class="col">
                <h2 class="text-primary text-capitalize mb-3">features</h2>
                <ul class="text-info-white" id="featuresList">
                </ul>            
            </div>
            
        </div>
        <div class="preview">
        <div class="title text-center mb-4">
          <h1 class="text-primary text-capitalize">Quick preview</h1>
        </div>
       <div class="slider d-flex overflow-x-auto gap-2 pb-3 " id="imgsPreview">
       </div>
       </div>
       <div class="position-fixed d-flex d-none  top-0 start-0 w-100 h-100 preview-images">
       <i class="bi bi-x-lg position-absolute top-0 end-0 m-4 fs-2 fw-bold text-primary" id="closePreview"></i>
       <img src="${projectPathHTML}/imgs/1.png" alt="" class="m-auto" id="previewImg">
       </div>
`;
const projectContainer = document.querySelector('#projectContent');
projectContainer.innerHTML = pageTemplte;
projectJson.catigories.forEach((catigory ) => {
    document.querySelector('#catigories').innerHTML+= `<p class="btn-primary-changed fixed text-center p-2 px-4  rounded-4 m-0 w-auto" style="font-size: .75rem;" >${catigory}</p>` ;
});
projectJson.challenges.forEach((challenge) => {
    document.querySelector('#challengesList').innerHTML+= `<li class="mb-3">${challenge}</li>` ;
});
projectJson.solutions.forEach((solution) => {
    document.querySelector('#solutionsList').innerHTML+= `<li class="mb-3">${solution}</li>` ;
});
projectJson.features.forEach((feature) => {
    document.querySelector('#featuresList').innerHTML+= `<li class="mb-3">${feature}</li>` ;
});
for(var i = 1 ; i <= projectJson.imagesNum ; i++){
    document.querySelector('#imgsPreview').innerHTML +=`<div class="slider-item"><img src="${projectPathHTML}/imgs/${i}.png"></div>`;
}

document.querySelectorAll('.slider-item img').forEach((img) => {
    img.addEventListener("click" , (e) =>{
        console.log(e.currentTarget.src)
        let aspectRatio = img.naturalWidth / img.naturalHeight;
        console.log(aspectRatio)
        if (aspectRatio > 1){
            document.querySelector('#previewImg').classList.add('w-75');
        }else{
            document.querySelector('#previewImg').classList.add('h-75');
        }
        document.querySelector('#navbar').classList.add('d-none');
        document.querySelector('.preview-images').classList.remove('d-none')
        document.querySelector('#previewImg').src = e.currentTarget.src;
    })
})
document.querySelector('#closePreview').addEventListener('click' , () => {
    document.querySelector('#navbar').classList.remove('d-none');
    document.querySelector('.preview-images').classList.add('d-none')
    document.querySelector('#previewImg').classList.remove('w-75', 'h-75');

})