const checkboxes = document.querySelectorAll('form input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
let inBetween = false;
if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      console.log(`checkbox is ${checkbox.id} and inBetween is ${inBetween === true} checked = ${checkbox.checked}`);
      if (inBetween) {
        checkbox.checked = true;
        // checkbox.checked = `!${checkbox.checked}`;
      }
      console.log(`checkbox is ${checkbox.id} and inBetween is ${inBetween === true} checked = ${checkbox.checked}`);
    })
}
  lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));