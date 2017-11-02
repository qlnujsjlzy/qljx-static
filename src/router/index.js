/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Rosource from 'vue-resource'
import Index from '@/components/Index'
import Product from '@/components/Product'
import Checklist from '@/components/Checklist'
import Checkout from '@/components/Checkout'
import MyCenter from '@/components/MyCenter'

import Button from '@/components/demo/Button'
import IndexDemo from '@/components/demo/Index'
import Dialog from '@/components/demo/Dialog'
import Cell from '@/components/demo/Cell'
import Grids from '@/components/demo/Grids'
import Icons from '@/components/demo/Icons'
import List from '@/components/demo/List'
import ListTheme from '@/components/demo/Listtheme'
import ListInfinitescroll from '@/components/demo/Listinfinitescroll'
import ListPullRefresh from '@/components/demo/Listpullrefresh'
import Badge from '@/components/demo/Badge'
import AsideBar from '@/components/demo/Asidebar'
import TabBar from '@/components/demo/Tabbar'
import NavBar from '@/components/demo/Navbar'
import Tabs from '@/components/demo/Tabs'
import Tab from '@/components/demo/Tab'
import ScrollTab from '@/components/demo/Scrolltab'
import ActionSheet from '@/components/demo/Actionsheet'
import SendCode from '@/components/demo/Sendcode'
import ProgressBar from '@/components/demo/Progressbar'
import KeyBoard from '@/components/demo/Keyboard'
import Slider from '@/components/demo/Slider'
import Spinner from '@/components/demo/Spinner'
import CitySelect from '@/components/demo/Cityselect'
import CountDown from '@/components/demo/Countdown'
import Rate from '@/components/demo/Rate'
import Popup from '@/components/demo/Popup'
import CountUp from '@/components/demo/Countup'
import RollNotice from '@/components/demo/Rollnotice'
import Input from '@/components/demo/Input'
import FlexBox from '@/components/demo/Flexbox'
import CR from '@/components/demo/Cr'
import Switch from '@/components/demo/Switch'
import Radio from '@/components/demo/Radio'
import CheckBox from '@/components/demo/Checkbox'
import BackTop from '@/components/demo/Backtop'
import Accordion from '@/components/demo/Accordion'
import DateTime from '@/components/demo/Datetime'
import LightBox from '@/components/demo/Lightbox'
import TimeLine from '@/components/demo/Timeline'
import Step from '@/components/demo/Step'
import CheckList from '@/components/demo/Checklist'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.flexible.js'

Vue.use(Router)
Vue.use(Rosource)
Vue.use(YDUI)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/product/:code',
      name: 'product',
      component: Product
    },
    {
      path: '/check',
      name: 'Check',
      component: Checklist
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/my',
      name: 'MyCenter',
      component: MyCenter
    },
    {
      path: '/demo',
      name: 'index',
      component: IndexDemo
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {path: '/dialog', name: 'dialog', component: Dialog},
    {path: '/cell', name: 'cell', component: Cell},
    {path: '/grids', name: 'grids', component: Grids},
    {path: '/icons', name: 'icons', component: Icons},
    {path: '/list', name: 'list', component: List},
    {path: '/list.theme/:id', name: 'list.theme/:id', component: ListTheme},
    {path: '/list.infinitescroll', name: 'list.infinitescroll', component: ListInfinitescroll},
    {path: '/list.pullrefresh', name: 'list.pullrefresh', component: ListPullRefresh},
    {path: '/badge', name: 'badge', component: Badge},
    {path: '/asidebar', name: 'asidebar', component: AsideBar},
    {path: '/tabbar', name: 'tabbar', component: TabBar},
    {path: '/navbar', name: 'navbar', component: NavBar},
    {path: '/tabs', name: 'tabs', component: Tabs},
    {path: '/tab', name: 'tab', component: Tab},
    {path: '/scrolltab', name: 'scrolltab', component: ScrollTab},
    {path: '/actionsheet', name: 'actionsheet', component: ActionSheet},
    {path: '/sendcode', name: 'sendcode', component: SendCode},
    {path: '/progressbar', name: 'progressbar', component: ProgressBar},
    {path: '/keyboard', name: 'keyboard', component: KeyBoard},
    {path: '/slider', name: 'slider', component: Slider},
    {path: '/spinner', name: 'spinner', component: Spinner},
    {path: '/cityselect', name: 'cityselect', component: CitySelect},
    {path: '/countdown', name: 'countdown', component: CountDown},
    {path: '/rate', name: 'rate', component: Rate},
    {path: '/popup', name: 'popup', component: Popup},
    {path: '/countup', name: 'countup', component: CountUp},
    {path: '/rollnotice', name: 'rollnotice', component: RollNotice},
    {path: '/input', name: 'input', component: Input},
    {path: '/flexbox', name: 'flexbox', component: FlexBox},
    {path: '/cr', name: 'C&R', component: CR},
    {path: '/switch', name: 'switch', component: Switch},
    {path: '/radio', name: 'radio', component: Radio},
    {path: '/checkbox', name: 'checkbox', component: CheckBox},
    {path: '/backtop', name: 'backtop', component: BackTop},
    {path: '/accordion', name: 'accordion', component: Accordion},
    {path: '/datetime', name: 'datetime', component: DateTime},
    {path: '/lightbox', name: 'lightbox', component: LightBox},
    {path: '/timeline', name: 'timeline', component: TimeLine},
    {path: '/step', name: 'step', component: Step},
    {path: '/checklist', name: 'checklist', component: CheckList}
  ]
})
