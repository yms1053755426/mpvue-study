import {RECEIVE_LIST} from './mutation-type'
import listData from '../../datas/list-data'
export default {
  getList ({commit}) {
    // 触发对应的mutation
    console.log('actions')
    commit(RECEIVE_LIST, listData)
  }
}
