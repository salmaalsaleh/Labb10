//1
function greetUser(username){
    document.getElementById('output').innerText = "Hello, " + username;

}
greetUser("Salma")

//2
const button = document.getElementById('changeTextButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.innerText = 'Hello, World!';
});

//3
document.getElementById("concatButton").addEventListener("click", function() {
    
    var word1 = document.getElementById("input1").value;
    var word2 = document.getElementById("input2").value;
 
    var result = word1 + " " + word2;

    document.getElementById("result").innerHTML = "Result: " + result;
});

  //4
  function updateTitle() {
    const newTitle = document.getElementById('inputText').value;
    document.getElementById('title').innerText = newTitle;
  }

  //5
  function concatenateStrings() {
    
    const string1 = document.getElementById('word1').value;
    const string2 = document.getElementById('word2').value;
  
    const combinedString = string1 + string2;
  
    document.getElementById('combinedText').innerText = combinedString;
  }

  //6
  document.getElementById("changeBackgroundBtn").addEventListener("click", function() {
    document.getElementById("colorBox").style.backgroundColor = "blue";
});