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

const cardSectionPrototype = `<div class="poster_card">
    <p class="poster_title">!title!</p>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" />
        </svg>
        <p class="description_text">!date! жовтня 2020, !time! за Києвом</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M15 9H17V11H15V9M17 5H15V7H17V5M11 15H13V13H11V15M13 5H11V7H13V5M11 11H13V9H11V11M9 5H7V7H9V5M9 9H7V11H9V9M14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21M7 19H9V17H7V19M9 13H7V15H9V13M22 16.5C22 19.1 18.5 23 18.5 23S15 19.1 15 16.5C15 14.6 16.6 13 18.5 13S22 14.6 22 16.5M19.7 16.6C19.7 16 19.1 15.4 18.5 15.4S17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8S19.8 17.2 19.7 16.6Z" />
        </svg>
        <p class="description_text">!base_address!</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:0px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54ZZ" />
        </svg>
        <p class="description_text" style="color:#0059cc; font-weight:600;">Модератори секції</p>
    </div>
    <div style="display:flex; align-items:center">
        <p class="description_text" style="margin-left:64px">!first_moderator!</p>
        <a href="!tel1!" style="margin-bottom:0px;margin-top:0px;margin-right:16px" class="moderator_button">
            <svg style="width:32px;height:32px" viewBox="0 0 24 24">
              <path fill="#0059cc" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          </a>
    </div>
    <div style="display:flex; align-items:center">
        <p class="description_text" style="margin-left:64px">!second_moderator!</p>
        <a href="!tel2!" style="margin-bottom:0px;margin-top:0px;margin-right:16px" class="moderator_button">
            <svg style="width:32px;height:32px" viewBox="0 0 24 24">
              <path fill="#0059cc" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          </a>
    </div>
    <div id="zoomPassword" style="display:flex; align-items:center">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z" />
        </svg>
        <p class="description_text">Пароль ZOOM конференції: <b>!zoom_password!</b></p>
    </div>
    <div id="fullButton" style="display:flex;">
        <a href="!program_link!" class="poster_button" style="margin-left:8px">ПРОГРАМА</a>
        <a href="!zoom_link!" id="zoomButton" class="poster_button">ПІДКЛЮЧИТСЯ У ZOOM</a>
    </div>
</div>`
const cardSectionPrototypeEng = `<div class="poster_card">
    <p class="poster_title">!title!</p>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" />
        </svg>
        <p class="description_text">!date!nd of October 2020, !time! AM EEST</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:12px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M15 9H17V11H15V9M17 5H15V7H17V5M11 15H13V13H11V15M13 5H11V7H13V5M11 11H13V9H11V11M9 5H7V7H9V5M9 9H7V11H9V9M14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21M7 19H9V17H7V19M9 13H7V15H9V13M22 16.5C22 19.1 18.5 23 18.5 23S15 19.1 15 16.5C15 14.6 16.6 13 18.5 13S22 14.6 22 16.5M19.7 16.6C19.7 16 19.1 15.4 18.5 15.4S17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8S19.8 17.2 19.7 16.6Z" />
        </svg>
        <p class="description_text">!base_address!</p>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:0px">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54ZZ" />
        </svg>
        <p class="description_text" style="color:#0059cc; font-weight:600;">Moderators of section</p>
    </div>
    <div style="display:flex; align-items:center">
        <p class="description_text" style="margin-left:64px">!first_moderator!</p>
        <a href="!tel1!" style="margin-bottom:0px;margin-top:0px;margin-right:16px" class="moderator_button">
            <svg style="width:32px;height:32px" viewBox="0 0 24 24">
              <path fill="#0059cc" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          </a>
    </div>
    <div style="display:flex; align-items:center">
        <p class="description_text" style="margin-left:64px">!second_moderator!</p>
        <a href="!tel2!" style="margin-bottom:0px;margin-top:0px;margin-right:16px" class="moderator_button">
            <svg style="width:32px;height:32px" viewBox="0 0 24 24">
              <path fill="#0059cc" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          </a>
    </div>
    <div id="zoomPassword" style="display:flex; align-items:center">
        <svg class="description_icon" viewBox="0 0 24 24">
            <path fill="#0059cc" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z" />
        </svg>
        <p class="description_text">Password of ZOOM conference: <b>!zoom_password!</b></p>
    </div>
    <div id="fullButton" style="display:flex;">
        <a href="!program_link!" class="poster_button" style="margin-left:8px">AGENDA</a>
        <a href="!zoom_link!" id="zoomButton" class="poster_button">CONNECT IN ZOOM</a>
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

function generateSectionCard(source){
    let html = cardSectionPrototype;
    if(source.title.startsWith('Pediatr') || source.title.startsWith('Internal')){
        html = cardSectionPrototypeEng;
    }
    html = html.replace(/!title!/i, source.title);
    html = html.replace(/!time!/i, source.time);
    html = html.replace(/!date!/i, source.date.toString());
    html = html.replace(/!base_address!/i, source.adress);
    html = html.replace(/!first_moderator!/i, source.moderators[0].surname.toUpperCase().trim() + " " + source.moderators[0].name.trim() + " " + source.moderators[0].middle_name.trim());
    html = html.replace(/!tel1!/i, "tel:" + source.moderators[0].tel);
    html = html.replace(/!second_moderator!/i, source.moderators[1].surname.toUpperCase().trim() + " " + source.moderators[1].name.trim() + " " + source.moderators[1].middle_name.trim());
    html = html.replace(/!tel2!/i, "tel:" + source.moderators[1].tel);
    html = html.replace(/!program_link!/i, source.program);
    if(source.zoom != null){
        html = html.replace(/!zoom_password!/i, source.zoom.password);
    }
    let card = document.createElement('div');
    card.innerHTML = html;
    if(source.zoom != null){
        card.querySelector("#zoomButton").href = source.zoom.link;
    }
    else{
        card.querySelector("#zoomButton").style.display = 'none';
        card.querySelector("#zoomPassword").style.display = 'none';
    }
    if(source.title.startsWith('Pediatr')){
        card.querySelector("#zoomPassword").style.display = 'none';
        card.querySelector("#zoomButton").innerHTML = 'CONNECT IN GOOGLE MEET'
    }
    return card;
}