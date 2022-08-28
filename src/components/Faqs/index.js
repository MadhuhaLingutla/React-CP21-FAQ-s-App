// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isopened: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isopened: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isopened: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    isopened: false,
  },
]

class Faqs extends Component {
  state = {initialfaqsList: faqsList}

  showanswer = id => {
    const {initialfaqsList} = this.state

    const updatedfaqsList = initialfaqsList.map(each => {
      if (each.id === id) {
        return {...each, isopened: !each.isopened}
      }
      return each
    })

    this.setState({initialfaqsList: updatedfaqsList})
  }

  render() {
    const {initialfaqsList} = this.state
    return (
      <div className="bg-container">
        <div className="faqcard">
          <h1 className="heading">FAQ's</h1>
          <ul className="faqslist-container">
            {initialfaqsList.map(each => (
              <FaqItem item={each} key={each.id} showanswer={this.showanswer} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
