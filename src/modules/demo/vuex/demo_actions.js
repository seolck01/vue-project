import * as types from './demo_types'
import axios from '../../../common/axios'
import api from '../demo_api'

export const addCount = ({commit},option={}) =>{
  return new Promise((resolve, reject)=>{
    axios(api.getTest,{testData:1}).then((res)=>{
      console.log(res);
    }).catch(()=>{

    });
    commit(types.ADD_COUNT,option)
  })
};
