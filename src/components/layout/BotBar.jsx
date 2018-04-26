import React, { Component } from 'react';
// import HeaderBotMenu from '../header/BotMenu';
import { TabBar } from 'antd-mobile';
import {Link,withRouter} from "react-router-dom"
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: true,
      pathName:"",
    };
  }
  componentDidMount(){
    this.setState({pathname:this.props.location.pathname})
  }
  renderContent(pageText) {
    const pathName=this.props.location.pathname
    console.log(pathName)
    return (
      <div>
    
        <div>Clicked “{pageText}” tab， show “{pageText}” information</div>
      
        {/* <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a> */}
      </div>
    );
  }

  render() {
    const pathName=this.props.location.pathname
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 600 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={ "/home" === this.props.location.pathname }
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
                pathName:"home"
              });
            this.props.history.push("home");
            }}
            data-seed="logId"
          >
            { pathName ==="/home" ?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            title="消息"
            key="message"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selected={"/message" === this.props.location.pathname}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab1',
                pathName:"message"
              });
            this.props.history.push("message");
            }}
            data-seed="logId"
          >
            { pathName ==="/message" ?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            // dot
            selected={"/fr" === this.props.location.pathname}
            onPress={() => {
              this.props.history.push("fr");
              this.setState({
                selectedTab: 'greenTab',
                pathName:"fr"
              });
            }}
          >
            { pathName==="/fr" ? this.props.children:null}
         </TabBar.Item>
         
           {/* <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="wode"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.props.history.push("mine");
              this.setState({
                selectedTab: 'yellowTab',
                pathName:"mine"
              });
            }}
          >
            { pathName==="/mine" ? this.props.children:null}
          </TabBar.Item> */}
        </TabBar>
      </div>
    );
  }
}
// export default  withRouter(Login);
export default withRouter(TopBar);