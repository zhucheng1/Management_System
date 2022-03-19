import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
// 导入弹窗提示组件
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 需要进行全局挂载，所有组件就可以通过vue原型访问到它了，$message是一个自定义属性
Vue.prototype.$message = Message;
