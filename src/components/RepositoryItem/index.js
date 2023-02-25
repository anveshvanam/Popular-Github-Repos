// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, name, issuesCount, forksCount, starsCount} = repoDetails
  return (
    <li className="repo-item">
      <img src={avatarUrl} className="image" alt={name} />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="icon"
          alt="stars"
        />
        <p className="desc">{`${starsCount} stars`}</p>
      </div>
      <div className="repo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="icon"
          alt="forks"
        />
        <p className="desc">{`${forksCount} forks`}</p>
      </div>
      <div className="repo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="icon"
          alt="open issues"
        />
        <p className="desc">{`${issuesCount} issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
