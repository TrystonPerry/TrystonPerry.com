const github = new Github;
const ui = new UI;
const userSearch = document.getElementById('username');

userSearch.addEventListener('keyup', e => {
  const username = e.target.value;
  if(username !== ''){
    github.getUser(username)
    .then(data => {
      if(data.user.message === 'Not Found'){
        // Show alert
        ui.alert(username + ' not found', 'danger');
      } else {
        ui.alert();
        ui.showUserInfo(data.user);
        ui.showUserRepos(data.repos);
      }
    })
  } else {
    document.getElementById('user-info').innerHTML = '';
    document.getElementById('user-repos').innerHTML = '';
  }
})