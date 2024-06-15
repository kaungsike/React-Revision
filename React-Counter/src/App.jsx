import React, { useState } from 'react'
import Counter from './Counter'
import Box from './Box'

const App = () => {

    const faqs = [
        {
          id: 1,
          question: "What is JavaScript?",
          answer: "JavaScript is a high-level programming language used for creating dynamic and interactive websites."
        },
        {
          id: 2,
          question: "How do you declare a variable in Python?",
          answer: "In Python, you declare a variable by simply assigning a value to a name using the '=' operator."
        },
        {
          id: 3,
          question: "What are the benefits of using React?",
          answer: "React allows for the creation of reusable UI components, making it easier to build and maintain large-scale applications."
        },
        {
          id: 4,
          question: "How do you add an event listener in JavaScript?",
          answer: "You can add an event listener in JavaScript using the 'addEventListener' method, specifying the event type and a function to handle the event."
        },
        {
          id: 5,
          question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
          answer: "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' cannot be reassigned, while 'let' and 'var' can."
        }
      ];
      
      
      
    return <div className='p-10'>
        {faqs.map((faq) => <Box key={faq.id} question={faq.question} answer={faq.answer}/>)}
    </div>
        
    
}

export default App