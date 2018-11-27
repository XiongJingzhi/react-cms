import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import BreadcrumbCustom from '@/components/Breadcrumb'
import '../style.scss'

export default class Carousels extends Component {
  render() {
    return (
      <div>
        <BreadcrumbCustom first="ui" second="carousel" />
        <Card title="text-carousel" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <h3>Ant Motion Banner - React</h3>
            </div>
            <div>
              <h3>Ant Motion Banner - Vue</h3>
            </div>
            <div>
              <h3>Ant Motion Banner - Angular</h3>
            </div>
          </Carousel>
        </Card>
        <Card title="picture-carousel" className="card-wrap">
          <Carousel autoplay>
            <div>
                <img src="/carousel-img/carousel-1.jpg" alt="carousel-1"/>
            </div>
            <div>
                <img src="/carousel-img/carousel-2.jpg" alt="carousel-2" />
            </div>
            <div>
                <img src="/carousel-img/carousel-3.jpg" alt="carousel-3" />
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
