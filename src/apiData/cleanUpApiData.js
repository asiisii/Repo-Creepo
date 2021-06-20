//After fetching the repo api data, the data will be sent here to filter out the required data
// and will return the required data only 
const cleanUpApiData = repos => {
  const details = repos.map(repo => {
    return {
      id: repo.id,
      username: repo.owner.login,
      imgUrl: repo.owner.avatar_url,
      github: repo.owner.url,
      star: repo.stargazers_count,
      language: repo.language,
      repositoryName: repo.name,
      description: repo.description,
      viewRepo: repo.html_url,
    }
  })
  return details
}

export default cleanUpApiData