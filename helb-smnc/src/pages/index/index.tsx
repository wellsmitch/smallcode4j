import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'

import { IMAGE_HOTS } from '../../utils/base'

import './index.scss'

const presentation = [
  { 
    isFirst: true,
    headerImg: IMAGE_HOTS + 'chetie_title.png',
    contentImg: IMAGE_HOTS + 'chetie_icon.png',
    content: [
      '产品名称：扫码挪车',
      '适用车型：全部',
      '产品材质：可移不干胶',
      '产品规格：80mm*90mm',
    ]
  },
  {
    isFirst: false,
    headerImg: IMAGE_HOTS + 'chetie_title2.png',
    content: [
      {
        isLeftRight: true,
        img: IMAGE_HOTS + 'chetie_cen1.png',
        content: [
          '01 绑定车辆',
          '微信扫描挪车贴二维码，完成绑定车辆信息，绑定之后可将挪车贴贴在挡风玻璃等显眼位置。'
        ]
      },
      {
        isLeftRight: false,
        img: IMAGE_HOTS + 'chetie_cen2.png',
        content: [
          '02 扫码挪车',
          '他人微信扫码，选择短信通知您或通过系统虚拟电话的形式，匿名拨通您的号码通知您挪车。'
        ]
      },
      {
        isLeftRight: true,
        img: IMAGE_HOTS + 'chetie_cen3.png',
        content: [
          '03 解绑车辆',
          '微信扫码，进入小程序，选择“修改绑定”，输入新的车辆信息进行绑定。'
        ]
      }
    ]
  }
]
class Index extends Component {
  
    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
      navigationBarTitleText: '首页'
    }
  state = {
    priceImage: IMAGE_HOTS + 'index-top-pic.jpg?time=' + Math.random() * 10,
    text: [
      {
        img: IMAGE_HOTS + 'jieshao-icon1.png',
        header: '隐私保护',
        content: ['匿名打电话','信息无泄漏']
      },
      {
        img: IMAGE_HOTS + 'jieshao-icon2.png',
        header: '快速便捷',
        content: ['微信扫码','一键通知挪车']
      },
      {
        img: IMAGE_HOTS + 'jieshao-icon3.png',
        header: '多管齐下',
        content: ['电话短信推送','多通道速达']
      }
    ],
    presentation: [
      {
        isFirst: true,
        headerImg: IMAGE_HOTS + 'chetie_title.png',
        contentImg: IMAGE_HOTS + 'chetie_icon.png',
        content: [
          '产品名称：扫码挪车',
          '适用车型：全部',
          '产品材质：可移不干胶',
          '产品规格：80mm*90mm',
        ]
      },
      {
        isFirst: false,
        headerImg: IMAGE_HOTS + 'chetie_title2.png'
      }
    ],
    content: [
      {
        isLeftRight: true,
        img: IMAGE_HOTS + 'chetie_cen1.png',
        content: [
          '01 绑定车辆',
          '微信扫描挪车贴二维码，完成绑定车辆信息，绑定之后可将挪车贴贴在挡风玻璃等显眼位置。'
        ]
      },
      {
        isLeftRight: false,
        img: IMAGE_HOTS + 'chetie_cen2.png',
        content: [
          '02 扫码挪车',
          '他人微信扫码，选择短信通知您或通过系统虚拟电话的形式，匿名拨通您的号码通知您挪车。'
        ]
      },
      {
        isLeftRight: true,
        img: IMAGE_HOTS + 'chetie_cen3.png',
        content: [
          '03 解绑车辆',
          '微信扫码，进入小程序，选择“修改绑定”，输入新的车辆信息进行绑定。'
        ]
      }
    ]
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { 
    
   }

  componentDidHide () { }
  render () {
    const presentation = this.state.presentation;
    const specialtyText = this.state.text;
    // 产品特点
    const listItems = specialtyText.map((v) => {
      return <View className='specialty'> 
        <Image className='specialty-image' src={v.img} />
        <Text className='specialty-header'>{v.header}</Text>
        <Text className='specialty-content margin23'>{v.content[0]}</Text>
        <Text className='specialty-content'>{v.content[1]}</Text>
      </View>
    });
    // 介绍
    const presentationList = presentation.map((v) => {
      if (v.isFirst) {
        return <View className="presentation">
          <Image className="presentation-header-img" src={v.headerImg} />
          <View className="presentation-content clearfix">
            <Image className='presentation-content-img' src={v.contentImg} />
            <View className='presentation-content-text'>
              <Text className='presentation-text'>{v.content[0]}</Text>
              <Text className='presentation-text'>{v.content[1]}</Text>
              <Text className='presentation-text'>{v.content[2]}</Text>
              <Text className='presentation-text'>{v.content[3]}</Text>
            </View>
          </View>
        </View>
      } else {
        return ''
      }
    })
    const contentText = this.state.content;
    const contentList = contentText.map((v) => {
        return <View className="presentation-content clearfix">
        {!v.isLeftRight ? (
          <Image className='presentation-content-img' src={v.img} />
        ) : (
          <View className='presentation-content-text  flot_left'>
              <Text className='presentation-text presentation-text-header'>{v.content[0]}</Text>
              <Text className='presentation-text'>{v.content[1]}</Text>
            </View>
        )}
        {v.isLeftRight ? (
          <Image className='presentation-content-img  flot_right' src={v.img} />
        ) : (
          <View className='presentation-content-text'>
              <Text className='presentation-text presentation-text-header'>{v.content[0]}</Text>
              <Text className='presentation-text'>{v.content[1]}</Text>
            </View>
        )}
        </View>
    })
    
    return (
      <View className='content'>
        <View className='header'>
          <Image className='header-image' src={this.state.priceImage} />
          <View className="header-content">
            <Text className="header-online">线上体验</Text>
            <Button className='header-buy' plain type='primary'>立即申购</Button>
          </View>
        </View>
        <View className='container-introduce'>
          {listItems}
        </View>
        <View className='container-presentation'>
          {presentationList}
          <View className="presentation">
            <Image className="presentation-header-img" src={this.state.presentation[1].headerImg} />
            {contentList}
          </View>
        </View>
        <View className='bottom'>
          <Image className="bottom-img" src={IMAGE_HOTS + 'chetie_bottom.png'} />
        </View>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index
