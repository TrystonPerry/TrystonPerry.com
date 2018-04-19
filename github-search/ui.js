class UI {
  constructor(){
    this.userInfo = document.getElementById('user-info');
  }

  showUserInfo(user){
    this.userInfo.innerHTML = `
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <h3 class="card-title">${user.login}</h3>
            <img src="${user.avatar_url}" alt="">
            <a href="${user.html_url}" class="btn btn-primary">View Profile</a>
          </div>
          <div class="col-sm-8">
            <div class="row user-stats">
              <button type="button" class="btn btn-primary">
                Public Repos <span class="badge badge-light">${user.public_repos}</span>
                <span class="sr-only">Public Repos: </span>
              </button>
              <button type="button" class="btn btn-secondary">
                Public Gists <span class="badge badge-light">${user.public_gists}</span>
                <span class="sr-only">Public Gists: </span>
              </button>
              <button type="button" class="btn btn-succcess">
                Followers <span class="badge badge-light">${user.followers}</span>
                <span class="sr-only"></span>
              </button>
              <button type="button" class="btn btn-info">
                Following <span class="badge badge-light">${user.following}</span>
                <span class="sr-only"></span>
              </button>
            </div>
            <div class="row">
              <ul class="list-group">
                <li class="list-group-item">Business: ${user.company || 'None'}</li>
                <li class="list-group-item" id="website">Website: ${"<a href=" + user.blog + ">" + user.blog + "</a>"}</li>
                <li class="list-group-item">Location: ${user.location  || 'Unknown'}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  showUserRepos(repos){
    console.log(repos);
    console.log(typeof repos);
    if(repos.length > 0){
      let output = `
        <h4>Public Repos:</h4>
        <ul class="list-group">`;
      repos.forEach((repo) => {
        output += `
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-8">
              <a href="${repo.html_url}">${repo.name}</a>
              <p>${repo.description  || 'No description provided'}</p>
            </div>
            <div class="col-sm-4">
              <span class="badge badge-pill badge-primary">Lang: ${repo.language || 'Unknown'}</span>
              <span class="badge badge-pill badge-warning">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-pill badge-success">Watchers: ${repo.watchers}</span>
              <span class="badge badge-pill badge-info">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </li>`
      })
      document.getElementById('user-repos').innerHTML = output;
    } else {
      document.getElementById('user-repos').innerHTML = '<h4>No Repos Found<h4>';
    }
  }

  alert(message, className){
    const alert = document.getElementById('alert');
    if(arguments.length === 0){
      alert.innerHTML = '';
    } else {
      alert.innerHTML = `
      <div class="alert alert-${className}" role="alert">
        ${message}
      </div>    
      `;
    }
  }
}