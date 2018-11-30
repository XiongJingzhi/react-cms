import React, { Component } from 'react'
import { Input, Select, Form, Button, Checkbox, DatePicker } from 'antd'
import Utils from '@/utils/util'

const FormItem = Form.Item
const {RangePicker} = DatePicker
class FilterForm extends Component {
  handleFilterSubmit = () => {
    let fieldsValue = this.props.form.getFieldsValue()
    this.props.filterSubmit(fieldsValue)
  }

  reset = () => {
    this.props.form.resetFields()
  }

  initFormList = () => {
    const { getFieldDecorator } = this.props.form
    const formList = this.props.formList
    const formItemList = []
    if (formList && formList.length > 0) {
      formList.forEach((item, i) => {
        let label = item.label
        let field = item.field
        let initialValue = item.initialValue || ''
        let placeholder = item.placeholder
        let width = item.width
        if (item.type === '时间查询') {
          const order_time = (
            <FormItem label="订单时间" key={field}>
              {getFieldDecorator('begin_time')(
                <RangePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  showTime={{ format: 'HH:mm:ss' }}
                />
              )}
            </FormItem>
          )
          formItemList.push(order_time)
        } else if (item.type === 'INPUT') {
          const INPUT = (
            <FormItem label={label} key={field}>
              {getFieldDecorator([field], {
                initialValue: initialValue
              })(<Input type="text" placeholder={placeholder} />)}
            </FormItem>
          )
          formItemList.push(INPUT)
        } else if (item.type === 'SELECT') {
          const SELECT = (
            <FormItem label={label} key={field}>
              {getFieldDecorator('select', {
                initialValue: initialValue
              })(
                <Select style={{ width: width }} placeholder={placeholder}>
                  {Utils.getOptionList(item.list)}
                </Select>
              )}
            </FormItem>
          )
          formItemList.push(SELECT)
        } else if (item.type === 'CHECKBOX') {
          const CHECKBOX = (
            <FormItem label={label} key={field}>
              {getFieldDecorator([field], {
                valuePropName: 'checked',
                initialValue: initialValue //true | false
              })(<Checkbox>{label}</Checkbox>)}
            </FormItem>
          )
          formItemList.push(CHECKBOX)
        }
      })
    }
    return formItemList
  }
  render() {
    return (
      <Form layout="inline">
        {this.initFormList()}
        <FormItem>
          <Button
            type="primary"
            style={{ margin: '0 20px' }}
            onClick={this.handleFilterSubmit}
          >
            查询
          </Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
export default Form.create({})(FilterForm)
