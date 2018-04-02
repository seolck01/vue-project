import * as types from './demo_types'


export const addCount = ({commit},option={}) =>{
  return new Promise((resolve, reject)=>{
    commit(types.ADD_COUNT,option)
  })
};
