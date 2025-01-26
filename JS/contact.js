const qouteCountriesDropdown = document.getElementById('qouteCountriesDropdown');
function getCountries(){
    let countriesData = [];
    
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
            .then(data => {
                // Sort countries alphabetically
                countriesData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

                // Add all countries to the dropdown
                const countriesDropdown = document.getElementById('qouteCountriesDropdown');
                countriesData.forEach(country => {
                    countryName = country.name.common;   
                    countryFlag = country.flag;
                    qouteCountriesDropdown.innerHTML += `<option value="${countryFlag} ${countryName}">${countryName}</option>`;
                });
            })
            .catch(error => console.log(error));
            const flagPlaceholder = document.getElementById('qouteCountryFlag');
            qouteCountriesDropdown.addEventListener('change', (event) => {
                let countryValue = event.target.value;
                let countryFlag = countryValue.split(' ')[0];
                console.log(countryFlag);
                flagPlaceholder.innerText = countryFlag;
            });
            
            
}
getCountries();


function changeContactForm(){
    const qouteForm = document.getElementById('qouteForm');
    const generalForm = document.getElementById('generalForm');
    const qouteFormBtn = document.getElementById('qouteFormBtn');
    const generalFormBtn = document.getElementById('generalFormBtn');
    qouteFormBtn.addEventListener('click', () => {
        qouteForm.style.display = 'block';
        generalForm.style.display = 'none';
        qouteFormBtn.classList.add('active');
        generalFormBtn.classList.remove('active');
    });

    generalFormBtn.addEventListener('click', () => {
        qouteForm.style.display = 'none';
        generalForm.style.display = 'block';
        generalFormBtn.classList.add('active');
        qouteFormBtn.classList.remove('active');
    });
}
changeContactForm();


