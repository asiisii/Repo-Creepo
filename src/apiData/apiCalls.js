const baseUrl = 'https://api.github.com/search/repositories?q='

const fetchRepoData = (repoName, language) => {
  return fetch(`${baseUrl}${repoName}+language:${language}&sort=stars`)
}



export {
  fetchRepoData
}
// sample api 
//https://api.github.com/search/repositories?q=hello+language:C#&sort=stars'