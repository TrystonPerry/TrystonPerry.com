class Github{
  constructor(){
    this.client_id = '5faf804a7ec034043890';
    this.client_secret = 'f70059c39fee9125cf85b47ec4779ee9475e6be7';
  }

  async getUser(username) {
    let user = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    user = await user.json();
    let repos = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    repos = await repos.json();
    return {
      user,
      repos
    }
  }
}