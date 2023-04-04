
 function displayMessage() {
  //givens//
  const r_now = new Date();
  const c_hours = r_now.getHours();
  let display_message;

  if (c_hours < 12) {
    display_message = "GM.";
  } else if (c_hours < 16) {
    display_message = "Time: Afternoon.";
  } else if (c_hours < 20) {
    display_message = "Time: Evening.";
  } else {
    display_message = "GN.";
  }
  return display_message
}

function breakPoint() {
  let breakpoint;
  const width = window.innerWidth;
  if (width < 567) 
  
  {breakpoint = "Viewing Mode: Mobile."}
  
  else if (width < 768) 
  
  {breakpoint = "Viewing Mode: Tablet."}

  else
  {breakpoint = "Viewing Mode: Desktop."}

  return breakpoint 

}


