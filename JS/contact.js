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
                if(countryFlag === 'Select'){
                    countryFlag = '';
                }
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
function sendQoutMessageViaWhatsapp(){
    let phoneNumber = "+201288080534";
    const qouteSubmitBtn = document.querySelector('#qouteSubmitBtn');
    qouteSubmitBtn.addEventListener('click', () => {
        let name = document.querySelector('#qouteInputName').value;
        let phone = document.querySelector('#qouteInputPhone').value;
        let email = document.querySelector('#qouteInputEmail').value;
        let company = document.querySelector('#qouteInputCompany').value;
        let country = document.querySelector('#qouteCountriesDropdown').value;
        let budget = document.querySelector('#QouteBudget').value;
        let services = document.querySelectorAll('.services .form-check-input');
        let servicesArray = [];
        services.forEach(service => {
            if(service.checked){
                servicesArray.push(service.value);
            }
            });
        let message = document.querySelector('#qouteInputMessage').value
        const whatsappMessage = `
     *🚀 New Qoute Chat Received! 🚀*
    
    *👤 Name :* ${name}
    *📱 Phone :* ${phone}
    *✉️ Email :* ${email}
    *🏢 Company :* ${company}
    *🌍 Country :* ${country}
    *💰 Project Budget :* ${budget}
    *🛠 Required Services :* ${servicesArray.join(' - ')}
    *📝 Message :* ${message}
    
    📌 Sent from *Barq* website.
    `
    if (name && phone && email && company && country && budget && servicesArray.length > 0 && message){
        console.log(whatsappMessage)
        window.open( `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}` , '_blank');
    }else{
        alert('Please fill all the required fields')
    }
    
    })
    // window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // console.log(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`)
}
sendQoutMessageViaWhatsapp();
function sendGeneralMessageViaWhatsapp(){
    let phoneNumber = "+201288080534";
    const generalSubmitBtn = document.querySelector('#generalSubmitBtn');
    generalSubmitBtn.addEventListener('click', () => {
        let name = document.querySelector('#generalInputName').value;
        let email = document.querySelector('#generalInputEmail').value;
        let subject = document.querySelector('#generalInputsubject').value;
        let message = document.querySelector('#generalInputMessage').value;
        const whatsappMessage = `
     *🚀 New General Chat Received! 🚀*
    
    *👤 Name :* ${name}
    *✉️ Email :* ${email}
    *📖 Subject :* ${subject}
    *📝 Message :* ${message}
    
    📌 Sent from *Barq* website.
    `
    if (name && email && subject && message){
        console.log(whatsappMessage)
        window.open( `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}` , '_blank');
    }else{
        alert('Please fill all the required fields')
    }
    
    })
    // window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // console.log(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`)
}
sendGeneralMessageViaWhatsapp();

