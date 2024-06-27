// 1.2
// const Header = (props) => {
//   return (
//     <div>
//       <p>
//         This course is {props.course}
//       </p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         This content is {props.content}
//       </p>
//       <Part courename = '1' cont = 'a' />
//       <Part courename = '2' cont = 'b' />
//       <Part courename = '3' cont = 'c' />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         This total number of quiz are {props.total}
//       </p>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         The course {props.courename} contents {props.cont}
//       </p>
//     </div>
//   )
// }

// const App = () => {

//   return (
//     <div>
//       <Header course = 'React.js'/>
//       <Content content = 'React'/>
//       <Total total = '30'/>
//     </div>
//   )
// }


// 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <p>
//         <h3>This course is {course}. </h3>
//         <p>{part1.name} has {part1.exercises} exercises. </p>
//         <p>{part2.name} has {part2.exercises} exercises. </p>
//         <p>{part3.name} has {part3.exercises} exercises. </p>
//       </p>
//     </div>
//   )
// }


//1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React2',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data2',
//       exercises: 7
//     },
//     {
//       name: 'State of a component2',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <h3>This course is {course}. </h3>
//       <p>{parts[0].name} has {parts[0].exercises} exercises. </p>
//       <p>{parts[1].name} has {parts[1].exercises} exercises. </p>
//       <p>{parts[2].name} has {parts[2].exercises} exercises. </p>
//     </div>
//   )
// }


//1.5
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React3',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data3',
//         exercises: 7
//       },
//       {
//         name: 'State of a component3',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <h3>This course is {course.name}. </h3>
//       <p>{course.parts[0].name} has {course.parts[0].exercises} exercises. </p>
//       <p>{course.parts[1].name} has {course.parts[1].exercises} exercises. </p>
//       <p>{course.parts[2].name} has {course.parts[2].exercises} exercises. </p>
//     </div>
//   )
// }



// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


// const App = (props) => {
//   const {counter} = props
  
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App



// import { useState } from 'react'

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   console.log('rendering...', counter)
//   return (
//     <div>{counter}</div>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>

//       <button onClick={() => setCounter(0)}>
//         zero
//       </button>
//     </div>
//   )
// }


// const Display = ({ counter }) => <div>{counter}</div>
// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }






// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   // const handleLeftClick = () => {
//   //   const newClicks = {
//   //     left: clicks.left + 1,
//   //     right: clicks.right
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClick = () => {
//   //   const newClicks = {
//   //     left: clicks.left,
//   //     right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }

//   //简化为
//   const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

//   const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }


// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }




// const App = () => {
//   const [value, setValue] = useState(10)

//   const handleClick = () =>
//     console.log('clicked the button')

//   return (
//     <div>
//       {value}
//       <button onClick={handleClick}>button</button>
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)


//   const hello = () => {
//     const handler = () => console.log('hello world')
//     return handler
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={hello()}>button</button>
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

//   // const hello = (who) => {
//   //   const handler = () => {
//   //     console.log('hello', who)
//   //   }
//   //   return handler
//   // }

//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       {/* <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button> */}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }


// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }



//1.6-1.7
import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>
        statistics
      </h1>
      <p>good <Display value={good} /></p>
      <p>neutral  <Display value={neutral} /></p>
      <p>bad  <Display value={bad} /></p>
      <p>all  <Display value={good + neutral + bad} /></p>
      <p>average  <Display value={(good - bad)/(good + neutral + bad)} /></p>
      <p>positive<Display value={good/(good + neutral + bad)*100} />%</p>
    </div>
  )
}

export default App


