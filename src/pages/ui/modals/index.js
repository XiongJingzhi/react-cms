import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import BreadcrumbCustom from '@/components/Breadcrumb'
import '../style.scss'

export default class Model extends Component {
  state = {
    ModalText: 'Content of the modal',
    confirmLoading: false,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  showModal = modal => {
    this.setState({
      [modal]: true
    })
  }

  handleOk = modal => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true
    })

    setTimeout(
      modal => {
        console.log('modal', modal)
        this.setState({
          [modal]: false,
          confirmLoading: false,
          ModalText: 'Content of the modal'
        })
      },
      2000,
      modal
    )
  }

  handleCancel = modal => {
    this.setState({
      [modal]: false
    })
  }

  handleConfirm = type => {
    Modal[type]({
      title: '确认？',
      content: '你确定你学会了React了吗？',
      onOk() {
        console.log('Ok')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  render() {
    const {
      ModalText,
      showModal1,
      showModal2,
      showModal3,
      showModal4,
      confirmLoading
    } = this.state

    return (
      <div>
        <BreadcrumbCustom first="UI" second="modals" />
        <Card title="基础模拟框" className="card-wrap">
          <Button type="primary" onClick={() => this.showModal('showModal1')}>
            Open1
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal2')}>
            Open2
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal3')}>
            Open3
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal4')}>
            Open4
          </Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>
            Warning
          </Button>
        </Card>
        <Modal
          title="basic modal"
          visible={showModal1}
          confirmLoading={confirmLoading}
          onOk={() => this.handleOk('showModal1')}
          onCancel={() => this.handleCancel('showModal1')}
        >
          <p>{ModalText}</p>
        </Modal>

        <Modal
          title="React"
          confirmLoading={confirmLoading}
          visible={showModal2}
          onOk={() => this.handleOk('showModal2')}
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>{ModalText}</p>
        </Modal>

        <Modal
          title="React"
          visible={showModal3}
          wrapClassName="vertical-center-modal"
          confirmLoading={confirmLoading}
          okText="好的"
          cancelText="算了"
          onOk={() => this.handleOk('showModal3')}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>{ModalText}</p>
        </Modal>

        <Modal
          title="React"
          style={{ top: 20 }}
          visible={showModal4}
          confirmLoading={confirmLoading}
          onOk={() => this.handleOk('showModal4')}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    )
  }
}
