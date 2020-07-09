/*globals io*/
window.loading_screen = window.pleaseWait({
  logo: "https://media.discordapp.net/attachments/719608586216669215/730881600237076580/unknown.png?width=1000&height=333",
  backgroundColor: '#7289DA',
  loadingHtml: "<p id='loading' class='loading-message'>Please wait...</p>"
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}