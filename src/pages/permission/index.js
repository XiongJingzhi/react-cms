import React, { Component } from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
export default class Permission extends Component {
  render() {
    return (
      <Form layout="horizontal">
        <FormItem label="角色">
          <Input disabled maxLength={8} placeholder={'hello world'} />
        </FormItem>
      </Form>
    )
  }
}