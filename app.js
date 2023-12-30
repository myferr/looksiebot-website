// Get the page from the page meta tag (<meta name="page">)
var page = document.querySelector('meta[page]').getAttribute('page');

// Print to console the page
console.debug("Page = " + page);