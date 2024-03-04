document.getElementById('emailme').onclick = function() {
    window.location.href = 'mailto:roselynotus89@gmail.com';
};



let myNumber = "+2348077418560";

function myContact() {

 let contactMe = "https://wa.me/"  + myNumber;

   window.open(contactMe, "_blank");
    
 }

document.querySelector('button').onclick = myContact;





function myPhone() {
    let phoneNumber = +2348077418560;
    alert(phoneNumber);
    
}

document.getElementById('links').onclick = myPhone;



function openGithub() {
    let githubUrl = "https://github.com/Oreva-tech";

    window.open(githubUrl, '_blank');
}

document.getElementById('gitHub').onclick = openGithub;



function openlinkedin() {
    let linkedinUrl = "https://www.linkedin.com/in/roselyn-otunomeruke/";

    window.open(linkedinUrl, '_blank');
}

document.getElementById('linkedIn').onclick = openlinkedin;


function openTwitter() {
    let twitterUrl = "https://twitter.com/Otunomeruke/";

    window.open (twitterUrl, '_blank')
    
}

document.getElementById('xTwitter').onclick = openTwitter;



