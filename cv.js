const getInfo = async () => {
    const request = new Request('/cv.json');
    
    const response = await fetch(request);
  
    const cvObj = await response.json();

    return cvObj;
}
const populateCv = (cvObj) => {
    let employmentHtml = ``;
    cvObj.employment.forEach(element => { 
        const listItem = `
        <li>
            <h4>${element.time}</h4>
            <p>
                <span class=“job-title”>${element.jobTitle}</span>
                <span class=“bold-text”>${element.location}</span><br>
                ${element.text}
            </p>
        </li>`;
        employmentHtml += listItem;
     
    });
    document.getElementById('employmentList').innerHTML = employmentHtml;
    let educationHtml = ``;
    cvObj.education.forEach(element => {
        const listItem = `<li>${element}</li>`;
        educationHtml += listItem;
      
    });
    document.getElementById('educationList').innerHTML = educationHtml;
    let internshipsHtml = ``;
    cvObj.internships.forEach(element => {
        let listItem = `
        <p>
                <span class=“job-title”>${element.companyName}</span>
                <span class=“bold-text”>${element.text}</span>
            </p>`
     
        
    });
   
}
const cvObj = await getInfo();
populateCv(cvObj);