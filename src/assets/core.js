import Vue from 'vue'
import Dm from '@/components/Dm'
import Form from '@/components/Form'
import Layout from '@/components/Layout'
import Fetch from '@/api/fetch'

import { labelView } from '@/utils/filter'

Vue.use(Dm)
Vue.use(Form)
Vue.use(Layout)
Vue.prototype.Fetch = Fetch
Vue.filter('labelView', labelView)