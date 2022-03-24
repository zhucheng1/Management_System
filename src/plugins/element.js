import Vue from 'vue'
import { 
  Button,
  Form,
  FormItem, 
  Input, 
  Message, 
  Container, 
  Header, 
  Aside, 
  Main, 
  Menu, 
  Submenu, 
  MenuItemGroup, 
  MenuItem, 
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox
} from 'element-ui'
// Message 导入弹窗提示组件

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

// 需要进行全局挂载，所有组件就可以通过vue原型访问到它了，$message是一个自定义属性
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm
