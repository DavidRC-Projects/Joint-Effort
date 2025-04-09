/**
 * This function waits for 3 seconds (3000 milliseconds) after the 404 page loads.
 * It will then automatically redirect the user back to the homepage using window.location.replace, which replaces the current page in the browser history.
 * Function idea from https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
*/
setTimeout(() =>{
  window.location.replace("https://davidrc-projects.github.io/Joint-Effort/");
}, 3000);