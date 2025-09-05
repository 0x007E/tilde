document.getElementById('acceptCookies').onclick = function() {
  document.cookie = "cookie-consent=accepted; path=/";
  loadAnalytics();
  var modal = document.getElementById('cookieConsentModal');
  var bsModal = bootstrap.Modal.getInstance(modal);
  bsModal.hide();
};

document.getElementById('declineCookies').onclick = function() {
  document.cookie = "cookie-consent=declined; path=/";
  var modal = document.getElementById('cookieConsentModal');
  var bsModal = bootstrap.Modal.getInstance(modal);
  bsModal.hide();
};

window.onload = function() {
  if (!document.cookie.match(/cookie-consent=(accepted|declined)/)) {
    var modal = new bootstrap.Modal(document.getElementById('cookieConsentModal'));
    modal.show();
  } else if (document.cookie.match(/cookie-consent=accepted/)) {
    loadAnalytics();
  }
};