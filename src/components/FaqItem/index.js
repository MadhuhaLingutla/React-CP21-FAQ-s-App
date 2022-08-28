// Write your code here.

import './index.css'

const FaqItem = props => {
  const {item, showanswer} = props
  const {id, questionText, answerText, isopened} = item

  const imgurl = isopened
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

  const alttext = isopened ? 'minus' : 'plus'

  const buttonclicked = () => {
    showanswer(id)
  }

  return (
    <li className="faq-item">
      <div className="question-container">
        <h2 className="question">{questionText}</h2>
        <button className="query-button" type="button" onClick={buttonclicked}>
          <img className="image" src={imgurl} alt={alttext} />
        </button>
      </div>

      {isopened && (
        <div className="hidden-answer-container">
          <hr className="hr" />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
