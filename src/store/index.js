import Vue from 'vue'
import Vuex from 'vuex'
import RPC from './rpc'

Vue.use(Vuex)

const base_url = 'http://server/'

RPC.base(base_url)
RPC.procedure('getAllArticles', 'articles')
RPC.procedure('getAllDoubts', 'doubts')
RPC.procedure('getAllInstitutional', 'institutional')
RPC.procedure('getAllCustomers', 'customers')
RPC.procedure('getAllSlides', 'slides')

export default new Vuex.Store({
  state: {
    files: base_url,
    server: base_url,
    articles: null,
    institutional: null,
    doubts: null,
    customers: null,
    slides: null
  },
  ...RPC
})
