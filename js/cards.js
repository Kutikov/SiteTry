const cardPrototype = 
`<div class="poster_card">
    <p class="poster_title">!title!</p>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M20,17A2,2 0 0,0 22,15V4A2,2 0 0,0 20,2H9.46C9.81,2.61 10,3.3 10,4H20V15H11V17M15,7V9H9V22H7V16H5V22H3V14H1.5V9A2,2 0 0,1 3.5,7H15M8,4A2,2 0 0,1 6,6A2,2 0 0,1 4,4A2,2 0 0,1 6,2A2,2 0 0,1 8,4Z" />
        </svg>
        <p class="description_text">!authors!</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
        </svg>
        <p class="description_text">!affiliation!</p>
    </div>
    <div style="display:flex; align-items:center">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.6,8.34C16.67,8.34 17.53,9.2 17.53,10.27C17.53,11.34 16.67,12.2 15.6,12.2A1.93,1.93 0 0,1 13.67,10.27C13.66,9.2 14.53,8.34 15.6,8.34M9.6,6.76C10.9,6.76 11.96,7.82 11.96,9.12C11.96,10.42 10.9,11.5 9.6,11.5C8.3,11.5 7.24,10.42 7.24,9.12C7.24,7.81 8.29,6.76 9.6,6.76M9.6,15.89V19.64C7.2,18.89 5.3,17.04 4.46,14.68C5.5,13.56 8.13,13 9.6,13C10.13,13 10.8,13.07 11.5,13.21C9.86,14.08 9.6,15.23 9.6,15.89M12,20C11.72,20 11.46,20 11.2,19.96V15.89C11.2,14.47 14.14,13.76 15.6,13.76C16.67,13.76 18.5,14.15 19.44,14.91C18.27,17.88 15.38,20 12,20Z" />
        </svg>
        <p class="description_text">!supervisor!</p>
    </div>
    <div style="display:flex;">
        <a onclick='press("!image_name!")' class="poster_button">ПЕРЕГЛЯНУТИ ПОСТЕР</a>
    </div>  
</div>`

const cardPresentationPrototype = 
`<div class="poster_card">
    <p class="poster_title">!title!</p>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M20,17A2,2 0 0,0 22,15V4A2,2 0 0,0 20,2H9.46C9.81,2.61 10,3.3 10,4H20V15H11V17M15,7V9H9V22H7V16H5V22H3V14H1.5V9A2,2 0 0,1 3.5,7H15M8,4A2,2 0 0,1 6,6A2,2 0 0,1 4,4A2,2 0 0,1 6,2A2,2 0 0,1 8,4Z" />
        </svg>
        <p class="description_text">!authors!</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 16.2L14 17L11 11.8V7H12.5V11.4L15.3 16.2Z" />
        </svg>
        <p class="description_text">!time!</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
        </svg>
        <p class="description_text">!affiliation!</p>
    </div>
    <div style="display:flex; align-items:center">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.6,8.34C16.67,8.34 17.53,9.2 17.53,10.27C17.53,11.34 16.67,12.2 15.6,12.2A1.93,1.93 0 0,1 13.67,10.27C13.66,9.2 14.53,8.34 15.6,8.34M9.6,6.76C10.9,6.76 11.96,7.82 11.96,9.12C11.96,10.42 10.9,11.5 9.6,11.5C8.3,11.5 7.24,10.42 7.24,9.12C7.24,7.81 8.29,6.76 9.6,6.76M9.6,15.89V19.64C7.2,18.89 5.3,17.04 4.46,14.68C5.5,13.56 8.13,13 9.6,13C10.13,13 10.8,13.07 11.5,13.21C9.86,14.08 9.6,15.23 9.6,15.89M12,20C11.72,20 11.46,20 11.2,19.96V15.89C11.2,14.47 14.14,13.76 15.6,13.76C16.67,13.76 18.5,14.15 19.44,14.91C18.27,17.88 15.38,20 12,20Z" />
        </svg>
        <p class="description_text">!supervisor!</p>
    </div>
    <div id="emptyButton" style="margin-bottom: 8px;padding-bottom: 16px;">
    
    </div>
    <div id="fullButton" style="display:flex;">
        <a href="!presentation_link!" class="poster_button">ПЕРЕГЛЯНУТИ ПРЕЗЕНТАЦІЮ</a>
    </div>
</div>`

function generateImage(source){
    let item = document.createElement('li');
    item.innerHTML = '<img src="images/!source!" style="height: 0px;width: 0px" alt="Picture 3">'.replace(/!source!/i, source);
    return item;
}

function generatePosterCard(source){
    let html = cardPrototype;
    html = html.replace(/!title!/i, source.title);
    html = html.replace(/!authors!/i, source.authors);
    html = html.replace(/!affiliation!/i, source.affiliation);
    html = html.replace(/!supervisor!/i, source.supervisor);
    html = html.replace(/!image_name!/i, source.image_name);
    let card = document.createElement('div');
    card.innerHTML = html;
    return card;
}

function generatePresentationCard(source){
    let html = cardPresentationPrototype;
    html = html.replace(/!title!/i, source.title);
    html = html.replace(/!authors!/i, source.authors);
    html = html.replace(/!affiliation!/i, source.affiliation);
    html = html.replace(/!supervisor!/i, source.supervisor);
    html = html.replace(/!time!/i, source.time);
    if(source.presentation_link != null){
        html = html.replace(/!presentation_link!/i, source.presentation_link);
    }
    let card = document.createElement('div');
    card.innerHTML = html;
    if(source.presentation_link != null){
        card.querySelector("#emptyButton").style.display = 'none';
    }
    else{
        card.querySelector("#fullButton").style.display = 'none';
    }
    return card;
}