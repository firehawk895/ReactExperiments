//state and props are updated async, use this method to obtain the correct previous values
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
