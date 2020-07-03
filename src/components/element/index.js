import Row from '@element/row/index';
import Col from '@element/col/index';
import Container from '@element/container';
import Main from '@element/main';
import Header from '@element/header';
import Footer from '@element/footer';
import Aside from '@element/aside';
import Icon from '@element/icon';
import Button from '@element/button';
import ButtonGroup from '@element/button-group';
import Link from '@element/link';

const components = [
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
  ButtonGroup,
  Link,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};


export default {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
  ButtonGroup,
  Link,
};

export { // 这样导出才可以用解构 获取单个组件
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
  ButtonGroup,
  Link,
};
