import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import AuthService from '../../services/auth'
import toastr from 'toastr'

const service = new AuthService()

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service
          .signup(values)
          .then(response => {
            console.log(response)
            toastr.success('User created')
          })
          .catch(err => {
            console.log(err)
            toastr.error('Something went wrong')
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalSignupForm
