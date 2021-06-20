
const cleanUpApiData = repos => {
  console.log(repos);
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
  console.log(details)
  return details
}

export default cleanUpApiData