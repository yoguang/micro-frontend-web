import { Layout, Menu, Breadcrumb } from 'antd';
import { history } from 'umi';

const { Header, Content, Footer } = Layout;

const routeList = [
  { name: '主应用', route: '/main', key: '1' },
  { name: '子应用Umi', route: '/micro-app', key: '2' },
  { name: '子应用Vue2.x', route: '/micro-vue-app', key: '3' },
]
export default ({ children }: { children: JSX.Element }) => {
  const linkTo = (route: string) => {
    history.push(route);
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {routeList.map((item) => {
            return <Menu.Item key={item.route} onClick={() => linkTo(item.route)}>{item.name}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Micro Front Ends ©2021 Created by wyg</Footer>
    </Layout>
  )
}