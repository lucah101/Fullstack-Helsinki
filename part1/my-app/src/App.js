const Header = (props) => {
  return (
    <div>
      <p>
        This course is {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        This content is {props.content}
      </p>
      <Part courename = '1' cont = 'a' />
      <Part courename = '2' cont = 'b' />
      <Part courename = '3' cont = 'c' />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        This total number of quiz are {props.total}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        The course {props.courename} contents {props.cont}
      </p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header course = 'React.js'/>
      <Content content = 'React'/>
      <Total total = '30'/>
    </div>
  )
}

export default App