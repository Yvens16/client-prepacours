import React from "react";
import api from '../../../api';
const Swal = require('sweetalert2')


export default class Form extends React.Component {
  handleChange(event){
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  handleSubmit(e){
    e.preventDefault();
    const { name } = e.target;
    this.setState({
      [name]: '',
    })

    api.post('/form', this.state, {
      onUploadProgress: pe => {
        const progress =  Math.round(pe.loaded / pe.total * 100);
        console.log('Upload Progress', Math.round(pe.loaded / pe.total * 100) + '%')
       if (progress === 100) {
        Swal.fire(
        'Good job!',
        'Votre mail à été envoyer',
        'success'
        )
        this.refs.form.reset();
       }
      }
    })
    .then(res => {
      console.log('res', res);
    })
    .catch(err =>{
      console.log('Sorry there was an error ', err)
    })

  }
  render() {
    return <>
      <form
      action="/form"
      method="post"
      id="form"
      onSubmit={e => this.handleSubmit(e)}
      ref='form'
      >
      {this.props.children}
      </form>
    </>;
  }
}
