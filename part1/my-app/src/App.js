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



import { useState } from 'react'

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


const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

export default App
