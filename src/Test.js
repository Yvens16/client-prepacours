import React from 'react';
import Form from './components/standalone/form/Form';

export default class Test extends React.Component {
  constructor (props) {
    super (props);
    this.state = ({
      name: ''
    })
  }

  onChildChange = (e) => {
    this.refs.child.handleChange(e);
    // this.setState({
    //   name: e.value,
    // })
  }

  componentDidMount() {
    console.log('this.refs.child', this.refs.child)
  }
  render () {
    return (
      <>
        <h1>Test Form Components with children</h1>
        <Form ref="child">
          <label>
            Name:
            <input 
            type="text" 
            name="name" 
            id="name"
            placeholder="Yvens"
            onChange={e => this.onChildChange(e)}
            />
          </label>
          <input type="submit" value="Validez pour 1h gratuite"/>
        </Form>
      </>
    )
  }
}