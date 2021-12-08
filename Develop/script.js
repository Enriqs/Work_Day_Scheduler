// save reference for time
var timeDisplayEl = $('#time-display');

// handle displaying the time
var rightNow = moment().format('dddd, MMMM Do');
timeDisplayEl.text(rightNow);

var rightNow2 = moment().format('hh a');
// console.log (rightNow2);

// Coloring table depending on time
function compare(dateTimeA) {
    var momentA = moment(dateTimeA,"hh a");
    var momentB1 = moment("09 am","hh a");
    var momentB2 = moment("10 am","hh a");
    var momentB3 = moment("11 am","hh a");
    var momentB4 = moment("12 pm","hh a");
    var momentB5 = moment("01 pm","hh a");
    var momentB6 = moment("02 pm","hh a");
    var momentB7 = moment("03 pm","hh a");
    var momentB8 = moment("04 pm","hh a");
    var momentB9 = moment("05 pm","hh a");
    var momentC = moment("06 pm", "hh a");
    

    if (momentA < momentC){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "gray";
    document.getElementById("event5").style.backgroundColor = "gray";
    document.getElementById("event6").style.backgroundColor = "gray";
    document.getElementById("event7").style.backgroundColor = "gray";
    document.getElementById("event8").style.backgroundColor = "gray";
    document.getElementById("event9").style.backgroundColor = "#ff6961";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB9){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "gray";
    document.getElementById("event5").style.backgroundColor = "gray";
    document.getElementById("event6").style.backgroundColor = "gray";
    document.getElementById("event7").style.backgroundColor = "gray";
    document.getElementById("event8").style.backgroundColor = "#ff6961";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB8){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "gray";
    document.getElementById("event5").style.backgroundColor = "gray";
    document.getElementById("event6").style.backgroundColor = "gray";
    document.getElementById("event7").style.backgroundColor = "#ff6961";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB7){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "gray";
    document.getElementById("event5").style.backgroundColor = "gray";
    document.getElementById("event6").style.backgroundColor = "#ff6961";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB6){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "gray";
    document.getElementById("event5").style.backgroundColor = "#ff6961";
    document.getElementById("event6").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB5){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "#ff6961";
    document.getElementById("event5").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event6").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB4){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "#ff6961";
    document.getElementById("event4").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event5").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event6").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB3){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "#ff6961";
    document.getElementById("event3").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event4").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event5").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event6").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB2){
    document.getElementById("event1").style.backgroundColor = "#ff6961";
    document.getElementById("event2").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event3").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event4").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event5").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event6").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');    
    }
    if (momentA < momentB1){
    document.getElementById("event1").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event2").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event3").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event4").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event5").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event6").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event7").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event8").style.backgroundColor = "rgb(6, 87, 10)";
    document.getElementById("event9").style.backgroundColor = "rgb(6, 87, 10)";
    $('input').addClass('coloring');
    }
    
    if (momentA > momentB9){
    document.getElementById("event1").style.backgroundColor = "gray";
    document.getElementById("event2").style.backgroundColor = "gray";
    document.getElementById("event3").style.backgroundColor = "gray";
    document.getElementById("event4").style.backgroundColor = "gray";
    document.getElementById("event5").style.backgroundColor = "gray";
    document.getElementById("event6").style.backgroundColor = "gray";
    document.getElementById("event7").style.backgroundColor = "gray";
    document.getElementById("event8").style.backgroundColor = "gray";
    document.getElementById("event9").style.backgroundColor = "gray";
    $('input').addClass('coloring');
    }
}

// rightNow2 = "1 pm";
// console.log (rightNow2);
compare(rightNow2);


// local storages updated

function myFunction1() {
  var evento = document.getElementById("event1").value;
  localStorage.setItem("userEvent1", evento);
  if (localStorage.getItem("userEvent1")==""){
    document.getElementById("event1").placeholder="";
  } else{
    document.getElementById("event1").placeholder= localStorage.getItem("userEvent1");
  }
}
function myFunction2() {
  var evento = document.getElementById("event2").value;
  localStorage.setItem("userEvent2", evento);
  if (localStorage.getItem("userEvent2")==""){
    document.getElementById("event2").placeholder="";
  } else{
    document.getElementById("event2").placeholder= localStorage.getItem("userEvent2");
  }
}
function myFunction3() {
  var evento = document.getElementById("event3").value;
  localStorage.setItem("userEvent3", evento);
  if (localStorage.getItem("userEvent3")==""){
    document.getElementById("event3").placeholder="";
  } else{
    document.getElementById("event3").placeholder= localStorage.getItem("userEvent3");
  }
}
function myFunction4() {
  var evento = document.getElementById("event4").value;
  localStorage.setItem("userEvent4", evento);
  if (localStorage.getItem("userEvent4")==""){
    document.getElementById("event4").placeholder="";
  } else{
    document.getElementById("event4").placeholder= localStorage.getItem("userEvent4");
  }
}
function myFunction5() {
  var evento = document.getElementById("event5").value;
  localStorage.setItem("userEvent5", evento);
  if (localStorage.getItem("userEvent5")==""){
    document.getElementById("event5").placeholder="";
  } else{
    document.getElementById("event5").placeholder= localStorage.getItem("userEvent5");
  }
}
function myFunction6() {
  var evento = document.getElementById("event6").value;
  localStorage.setItem("userEvent6", evento);
  if (localStorage.getItem("userEvent6")==""){
    document.getElementById("event6").placeholder="";
  } else{
    document.getElementById("event6").placeholder= localStorage.getItem("userEvent6");
  }
}
function myFunction7() {
  var evento = document.getElementById("event7").value;
  localStorage.setItem("userEvent7", evento);
  if (localStorage.getItem("userEvent7")==""){
    document.getElementById("event7").placeholder="";
  } else{
    document.getElementById("event7").placeholder= localStorage.getItem("userEvent7");
  }
}
function myFunction8() {
  var evento = document.getElementById("event8").value;
  localStorage.setItem("userEvent8", evento);
  if (localStorage.getItem("userEvent8")==""){
    document.getElementById("event8").placeholder="";
  } else{
    document.getElementById("event8").placeholder= localStorage.getItem("userEvent8");
  }
}
function myFunction9() {
  var evento = document.getElementById("event9").value;
  localStorage.setItem("userEvent9", evento);
  if (localStorage.getItem("userEvent9")==""){
    document.getElementById("event9").placeholder="";
  } else{
    document.getElementById("event9").placeholder= localStorage.getItem("userEvent9");
  }
}


// first localStorages called
document.getElementById("event1").placeholder= localStorage.getItem("userEvent1");
document.getElementById("event2").placeholder= localStorage.getItem("userEvent2");
document.getElementById("event3").placeholder= localStorage.getItem("userEvent3");
document.getElementById("event4").placeholder= localStorage.getItem("userEvent4");
document.getElementById("event5").placeholder= localStorage.getItem("userEvent5");
document.getElementById("event6").placeholder= localStorage.getItem("userEvent6");
document.getElementById("event7").placeholder= localStorage.getItem("userEvent7");
document.getElementById("event8").placeholder= localStorage.getItem("userEvent8");
document.getElementById("event9").placeholder= localStorage.getItem("userEvent9");