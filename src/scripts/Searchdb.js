let jsonData = `[
    {"Name": "FullSet Scania", "Des": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169119821874/Low_Spoiler_Scania.txt", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "FullSet Scania", "Des": "https://cdn.discordapp.com/attachments/1032017862027657306/1045403077877973052/Coles__Sons_Custom_S580.txt", "Image": "https://media.discordapp.net/attachments/1032017862027657306/1045403077471109202/ets2_20221124_180125_00.png?width=1214&height=683"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"},
    {"Name": "Name here", "Des": "Code", "Image": "https://cdn.discordapp.com/attachments/1032017862027657306/1050741169543462992/ets2_20221120_192654_00.png"}
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
        <h1> ${obj.Name} </h1> </p> <a href="${obj.Des}"><i class="fa fa-download"></i> Download</a>
        </div>`
        x.appendChild(elem)
      }
    }
  }