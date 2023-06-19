// Set the default values
var outer = "cylinder";
var inner = "hemisphere";

// Gets and sets the radio selection value
function oSelectValue(selection) {
  outer = selection;

  switch(outer) {
    case "hemisphere":
      document.getElementById("ho").style.display = "block";
      document.getElementById("co").style.display = "none";
      document.getElementById("fo").style.display = "none";
      document.getElementById("foh").style.display = "none";	  
      document.getElementById("uo").style.display = "none";
      break;
    case "cylinder":
      document.getElementById("ho").style.display = "none";
      document.getElementById("co").style.display = "block";
      document.getElementById("fo").style.display = "none";
      document.getElementById("foh").style.display = "none";	  
      document.getElementById("uo").style.display = "none";
      break;
    case "frustrum":
      document.getElementById("ho").style.display = "none";
      document.getElementById("co").style.display = "none";
      document.getElementById("fo").style.display = "block";
      document.getElementById("foh").style.display = "block";	  
      document.getElementById("uo").style.display = "none";
      break;
    case "cuboid":
      document.getElementById("ho").style.display = "none";
      document.getElementById("co").style.display = "none";
      document.getElementById("fo").style.display = "none";
      document.getElementById("foh").style.display = "none";	  
      document.getElementById("uo").style.display = "block";
      break;
  }

}

// Gets and sets the radio selection value
function iSelectValue(selection) {
  inner = selection;

  switch(inner) {
    case "hemisphere":
      document.getElementById("hi").style.display = "block";
      document.getElementById("ci").style.display = "none";
      document.getElementById("fi").style.display = "none";
      document.getElementById("fih").style.display = "none";	  
      document.getElementById("ui").style.display = "none";
      break;
    case "cylinder":
      document.getElementById("hi").style.display = "none";
      document.getElementById("ci").style.display = "block";
      document.getElementById("fi").style.display = "none";
      document.getElementById("fih").style.display = "none";	  
      document.getElementById("ui").style.display = "none";
      break;
    case "frustrum":
      document.getElementById("hi").style.display = "none";
      document.getElementById("ci").style.display = "none";
      document.getElementById("fi").style.display = "block";
      document.getElementById("fih").style.display = "block";	  
      document.getElementById("ui").style.display = "none";
      break;
    case "cuboid":
      document.getElementById("hi").style.display = "none";
      document.getElementById("ci").style.display = "none";
      document.getElementById("fi").style.display = "none";
      document.getElementById("fih").style.display = "none";	  
      document.getElementById("ui").style.display = "block";
      break;
  }

}


// Do all the calculations to determine the weight
function calculatePlaster() {
  const pi = 3.141592653589793;

  // Get the user inputs
  let hor = document.getElementById("hodiameter").value/2;
  let cor = document.getElementById("codiameter").value/2;
  let coh = document.getElementById("coheight").value;
  let foor = document.getElementById("foldiameter").value/2;
  let foir = document.getElementById("fosdiameter").value/2;
  let foh = document.getElementById("foheight").value;
  let col1 = document.getElementById("colength1").value;
  let col2 = document.getElementById("colength1").value;
  let col3 = document.getElementById("colength1").value;


  let hir = document.getElementById("hidiameter").value/2;
  let cir = document.getElementById("cidiameter").value/2;
  let cih = document.getElementById("ciheight").value;
  let fiR = document.getElementById("fildiameter").value/2;
  let fir = document.getElementById("fisdiameter").value/2;
  let fih = document.getElementById("fiheight").value;
  let cil1 = document.getElementById("cilength1").value;
  let cil2 = document.getElementById("cilength1").value;
  let cil3 = document.getElementById("cilength1").value;


  switch(outer) {
    case "hemisphere":
      v_o = 2/3 * pi * hor**3;
      break;
    case "cylinder":
      v_o = pi * cor**2 * coh;
      break;
    case "frustrum":
      v_o = 1/3 * pi * foh * (foor**2 + foir**2 + foor * foir);
      break;
    case "cuboid":
      v_o = col1 * col2 * col3;
      break;
   }

  switch(inner) {
    case "hemisphere":
      v_i = 2/3 * pi * hir**3;
      break;
    case "cylinder":
      v_i = pi * cir**2 * cih;
      break;
    case "frustrum":
      v_i = 1/3 * pi * fih * (fiR**2 + fir**2 + fiR * fir);
      break;
    case "cuboid":
      v_i = cil1 * cil2 * cil3;
      break;
   }

  v = v_o - v_i;
  w = v / 1.5;
  p = w * 1.3;
  
  if(v < 0){
	  document.getElementById("warnings").innerHTML = "Warning: input values don't appear correct.";
  }

  document.getElementById("v_o").innerHTML = v_o.toFixed();
  document.getElementById("v_i").innerHTML = v_i.toFixed();
  document.getElementById("v").innerHTML = v.toFixed();
  document.getElementById("w").innerHTML = w.toFixed();
  document.getElementById("p").innerHTML = p.toFixed();

}
