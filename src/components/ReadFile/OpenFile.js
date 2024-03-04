// function OpenFile() {
//   this.loadText = function () {
//     let objectFiles = document.getElementById("file");
//     let file = objectFiles.files[0];

//     readFile(file).then(
//       (result) => {
//         setProgText(result);
//       },
//       (error) => {
//         alert("Rejected: " + error);
//       }
//     );
//   };

//   let setProgText = function (text) {
//     //alert('setProgText: ' + text);
//     let textProg = document.getElementById("out");
//     textProg.innerHTML = "";
//     let lines = text.split(/\n/);
//     let size = lines.length;
//     let progLines;
//     for (let i = 0; i < size; i++) {
//       progLines = document.createElement("p");
//       progLines.textContent = lines[i];
//       textProg.appendChild(progLines);
//     }
//   };
// }

// export default OpenFile;
