// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, updateActiveTab, isTabActive} = props
  const {language, id} = languageDetails

  const onClickTab = () => {
    updateActiveTab(id)
  }
  const active = isTabActive ? 'active' : ''

  return (
    <li className="language-item">
      <button className={`button ${active}`} type="button" onClick={onClickTab}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
