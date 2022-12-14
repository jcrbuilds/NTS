let jsonData = `[
    {"Name": "Code Here", "req": "Requirements Here", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Code Here", "req": "Requirements Here", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Code Here", "req": "Requirements Here", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"}
  ]`
  
  let data = JSON.parse(jsonData)
  
  function search_code() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""
  
    for (i = 0; i < data.length; i++) {
      let obj = data[i];
  
      if (obj.Name.toLowerCase().includes(input)) {
        const elem = document.createElement("li")
        elem.innerHTML = `
        <div class="Codecont">
        <img src="${obj.Image}"> <p>
        ${obj.Name} </p> ${obj.req}
        </div>`
        x.appendChild(elem)
      }
    }
  }