// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchItem, updateSearchInput} = props
  const {suggestion} = searchItem
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item-container">
      <p>{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
