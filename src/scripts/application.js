const DevHTML = `
<label>What is you discord tag? (required)</label><br>
<textarea type="text" placeholder="example#1234" class="DiscordTag" required></textarea><br>
<label>Can you tell us if you have worked on any previous projects and what you did within them?</label><br>
<textarea type="text"></textarea><br>
<label>How do you approach problem solving and decision making in development? (required)</label><br>
<textarea type="text" required></textarea><br>
<label>How do you handle working together with team members? (required)</label><br>
<textarea type="text" required></textarea><br>
<label>Please list the languages in which you code. (required)</label><br>
<textarea type="text" required></textarea><br>
<label>Have you ever created/worked with APIs? If you have please give some details about it.</label><br>
<textarea type="text"></textarea><br>
<label>Is there anything else you would like to tell us?</label><br>
<textarea></textarea><br>
<button>Submit</button>
`

const SupportTeam = `
<label>What is you discord tag? (required)</label><br>
<textarea type="text" placeholder="example#1234" class="DiscordTag" required></textarea><br>
<label>Do you have a lot of experience with save editing Euro Truck Simulator files? (required)</label><br>
<textarea required></textarea><br>
<label>Can you please give an example situation and then say how you would support the person? (required)</label><br>
<textarea required></textarea><br>
<label>When handling multiple support tickets, how do you prioritize who you help first? (required)</label><br>
<textarea required></textarea><br>
<label>Is there anything else you would like to tell us?</label><br>
<textarea></textarea><br>
<button>Submit</button>
`

const ProjectTester =`
<label>What is you discord tag? (required)</label><br>
<textarea type="text" placeholder="example#1234" class="DiscordTag" required></textarea><br>
<label>Do you have any experience with Save Editing? (required)</label><br>
<textarea required></textarea><br>
<label>Do you have experience with the NTS App? (required)</label><br>
<textarea required></textarea><br>
<label>What can you bring to the team? (required)</label><br>
<textarea required></textarea><br>
<label>Is there anything else you would like to tell us?</label><br>
<textarea></textarea><br>
<button>Submit</button>
`

const SaveEditTeam = `
<label>What is you discord tag? (required)</label><br>
<textarea type="text" placeholder="example#1234" class="DiscordTag" required></textarea><br>
<label>Do you have experience with creating save edits? (required)</label><br>
<textarea required></textarea><br>
<label>Do you have a basic understanding of how the game files work? (required)</label><br>
<textarea required></textarea><br>
<label>What can you bring to the team? (required)</label><br>
<textarea required></textarea><br>
<label>What makes you different from the rest? (required)</label><br>
<textarea required></textarea><br>
<label>Is there anything else you would like to tell us?</label><br>
<textarea></textarea><br>
<button>Submit</button>
`

const ModdingTeam = `
<label>What is you discord tag? (required)</label><br>
<textarea type="text" placeholder="example#1234" class="DiscordTag" required></textarea><br>
<label>Do you have experience with creating mods for ETS2/ATS? (required)</label><br>
<textarea required></textarea><br>
<label>Do you have a basic understanding of how the game files work? (required)</label><br>
<textarea required></textarea><br>
<label>What can you bring to the team? (required)</label><br>
<textarea required></textarea><br>
<label>What makes you different from the rest? (required)</label><br>
<textarea required></textarea><br>
<label>Is there anything else you would like to tell us?</label><br>
<textarea></textarea><br>
<button>Submit</button>
`

const form = document.getElementById('Questions')

window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search)
    const param = urlParams.get('type')

    if (!param){return}

    document.getElementById('app-type').value = param
    AppChange(document.getElementById('app-type'))
}

function AppChange(Select){
    if(Select.value == 'Developer'){
        form.innerHTML = DevHTML
    } else if(Select.value == 'Support-Team'){
        form.innerHTML = SupportTeam
    } else if(Select.value == 'Save-Edit-Team'){
        form.innerHTML = SaveEditTeam
    } else if(Select.value == 'Modding-Team'){
        form.innerHTML = ModdingTeam
    } else if(Select.value == 'Testing-Team'){
        form.innerHTML = ProjectTester
    }
}

function FormSub(event){
    event.preventDefault()

    const Answers = form.querySelectorAll('textarea')
    const Questions = form.querySelectorAll('label')

    const payload = {
        "embeds": [{
            "title": `New ${document.getElementById('app-type').value} application`,
            "fields": []
        }]
    }

    for(let i = 0; i < Answers.length; i++){
        payload.embeds[0].fields.push({"name": Questions[i].innerHTML, "value": Answers[i].value})
    }

    fetch('https://discord.com/api/webhooks/1018603458816901191/RmxvL-eqBf1wag23U3giZ6E-kSfkKZNUVn1doPCf3CcfNp27nIa9bsDwSxsfQ1dfNNJ9', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(Response => {
        if (!Response.ok){
            alert('Failed to send, try again or contact the development team.')
        } else{
            alert('Send application for review!')
            window.location.href = "/"
        }
    })
}

form.addEventListener('submit', FormSub)




