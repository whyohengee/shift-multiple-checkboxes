/*
Let's write some pesudocode for this.

1. Grab the form, and all inputs.
What is returned?
Returns a node list.
*/


const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //Loop through all checkboxes
    checkboxes.forEach( checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between")
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach( input => input.addEventListener('click', handleCheck));