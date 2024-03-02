const dumb = document.getElementById("dumb");
const namey = document.getElementById("name");

function input(){
  let init = document.getElementById("init");
  let texty = init.value;
  if (texty == undefined || texty == ""){
    dumb.textContent = "input text first";
  } else {
    yes(texty);
  }
}

function yes(text){
    console.log("it work");
    if (text.length > 10){
        text = text.toLowerCase();
        text = text.split("");
        for (let i = text.length - 1; i >= 0; i--){
            if (text[i] != "a" && text[i] != "c" && text[i] != "g" && text[i] != "t"){
                text.splice(i,1);
            }
        }
        text = text.join('');
        if (text.length > 1){
            console.log(text);
            blastOff(text);
            console.log(fullData);
        }
    }
}
let fullData;
let nextLine;
let waitTimeVar;
function blastOff(text){
    //aight i gotta build this thing rip
    let base = "https://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Put&PROGRAM=blastn&DATABASE=nt&QUERY=";
    let full = base + text;
    console.log(full);
    return fetch(full)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            fullData = data;
            let lines = data.split('\n');
            let index = lines.findIndex(line => line.includes('<!--QBlastInfoBegin'));
            if (index !== -1 && index + 1 < lines.length) {
                nextLine = lines[index + 1];
                waitTimeVar = lines[index + 2];
                waitTimeVar = removeNonNumeric(waitTimeVar);
                console.log(nextLine); // This will print "line to save"
                nextLine = nextLine.replace(/\s/g, "");
                console.log(nextLine);
                let starter = "https://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=get&";
                starter = starter + nextLine + "&FORMAT_TYPE=text";
                console.log(starter);
                console.log("this will take " + waitTimeVar+5 + " seconds");
                wait((waitTimeVar+5)*1000).then(() => {
                    getDataNow(starter);
                  });

            } else {
                console.log("<!--QBlastInfoBegin not found or no next line");
            }
            return data; // If you want to use the data elsewhere
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Rethrow the error to propagate it
        });

}
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function removeNonNumeric(str) {
    return str.replace(/\D/g, '');
  }

  function getDataNow(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Return response data for next then block
      })
      .then(data => {
        saveVar = data;
        console.log(data);
        if (data){
          let lines = data.split('\n');
          let index = lines.findIndex(line => line.includes('QBlastInfoBegin'));
          if (index !== -1 && index + 1 < lines.length) {
            console.log("87");
              statusVar = lines[index + 1];
              statusVar = statusVar.replace(/\s/g, "");
              console.log(statusVar);
              if (statusVar == "Status=WAITING"){
                  console.log("waiting, will try again in a minute...")
                  return wait(60000).then(() => { // Return the promise chain
                      return getDataNow(url); // Retry the request
                    });
              } else {
                playSound();
                console.log(data);
                getResult(data);
            }
          } 
        } else {
          return wait(60000).then(() => {
            return getDataNow(url); // Retry the request
          });
        }
        return data;
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
}
function playSound() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
function getResult(x){
  let lines = x.split('\n');
  let targetLine = "Sequences producing significant alignments:                       (Bits)  Value  Ident";
  let index = lines.findIndex(line => line.includes(targetLine));
  let bestMatch = index !== -1 ? lines[index + 2] : null;

  console.log(bestMatch);
  namey.textContent = bestMatch;
}


let saveVar;