if (!sessionStorage.getItem('auth') && sessionStorage.getItem('auth') != '1') {
  window.location.replace('login.html');
}
