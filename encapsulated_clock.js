class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date : new Date().toLocaleTimeString()}
  }
  
  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
