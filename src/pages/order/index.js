import React, { Component } from 'react'
import { Card, Button, Table, Modal, Form } from 'antd'
import BaseForm from '@/components/BaseForm'
import Axios from '@/axios'
import Utils from '@/utils/util'

const FormItem = Form.Item
export default class Order extends Component {
  state = {
    orderInfo: {},
    orderConfirmVisible: false
  }
  params = {
    page: 1
  }
  formList = [
    {
      type: 'SELECT',
      label: '城市',
      field: 'city',
      initialValue: '1',
      width: 80,
      list: [
        { id: '0', name: '全部' },
        { id: '1', name: '北京' },
        { id: '2', name: '天津' },
        { id: '3', name: '上海' }
      ]
    },
    {
      type: '时间查询',
      field: 'time'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'order_status',
      placeholder: '全部',
      initialValue: '1',
      width: 90,
      list: [
        { id: '0', name: '全部' },
        { id: '1', name: '进行中' },
        { id: '2', name: '结束行程' }
      ]
    }
  ]

  componentDidMount() {
    this.requestList()
  }

  requestList = () => {
    let _this = this
    Axios.ajax({
      url: '/order/list',
      data: {
        params: this.params
      }
    }).then(res => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index
        return item
      })
      this.setState({
        list,
        pagination: Utils.pagination(res, current => {
          _this.params.page = current
          _this.requestList()
        })
      })
    })
  }

  handleFilter = params => {
    this.params = params
    this.requestList()
  }

  render() {
    const columns = [
      {
        title: '订单编号',
        dataIndex: 'order_sn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance',
        render(distance) {
          return distance / 1000 + 'Km'
        }
      },
      {
        title: '行驶时长',
        dataIndex: 'total_time'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time'
      },
      {
        title: '结束时间',
        dataIndex: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee'
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay'
      }
    ]
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 20
      }
    }
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
        </Card>
        <Card title="订单管理">
          <Button type="primary" onClick={this.openOrderDetail}>
            订单详情
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: 10 }}
            onClick={this.handleConfirm}
          >
            结束订单
          </Button>
        </Card>
        <div className="content-warp">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onClick(record, index)
                }
              }
            }}
          />
        </div>
        <Modal
          title="结束订单"
          visible={this.state.orderConfirmVisible}
          onCancel={() => this.state({
            orderConfirmVisible: false
          })}
          onOk={this.handleFinishOrder}
          width={600}
        >
          <Form layout="horizontal">
            <FormItem label="bike-id" {...formItemLayout}>
              {this.state.orderInfo.bike_sn}
            </FormItem>
            <FormItem label="bike_electricity" {...formItemLayout}>
              {this.state.orderInfo.battery + '%'}
            </FormItem>
            <FormItem label="bike_schedule_time" {...formItemLayout}>
              {this.state.orderInfo.start_time}
            </FormItem>
            <FormItem label="bike_location" {...formItemLayout}>
              {this.state.orderInfo.location}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
