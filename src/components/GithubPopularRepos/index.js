import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeLanguage: 'ALL', reposList: [], isLoading: true}

  componentDidMount() {
    this.getGithubRepos()
  }

  updateActiveTab = language => {
    this.setState({activeLanguage: language}, this.getGithubRepos)
  }

  getGithubRepos = async () => {
    const {activeLanguage} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeLanguage}`,
    )
    const data = await response.json()
    // console.log(data)
    const fetchedRepos = data.popular_repos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      forksCount: eachItem.forks_count,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    // console.log(fetchedRepos)
    this.setState({reposList: fetchedRepos, isLoading: false})
  }

  isTabActive = id => {
    const {activeLanguage} = this.state
    const isActive = activeLanguage === id
    return isActive
  }

  render() {
    const {reposList, isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="tabs-list">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              languageDetails={eachItem}
              key={eachItem.id}
              updateActiveTab={this.updateActiveTab}
              isTabActive={this.isTabActive(eachItem.id)}
            />
          ))}
        </ul>
        <ul className="repos-list">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            reposList.map(eachItem => (
              <RepositoryItem repoDetails={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
