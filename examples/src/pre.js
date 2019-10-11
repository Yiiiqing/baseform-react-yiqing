import React from 'react'
import FormClass from './index'

const formList = [
    {
        //必加
        type:'SELECT',
        label:'城市',
        field:'city',
        //选加
        placeholder:'全部',
        // 严格按照getFieldDecorator定义
        initialValue:'1',
        width:80,
        list:[{id:'0',name:'全部'},{id:'1',name:'宝鸡'},{id:'2',name:'天津'},{id:'3',name:'上海'}],
    },
    {
        //必加
        type:'INPUT',
        label:'模式',
        field:'model',
        //选加
        placeholder:'请输入模式',
        // 严格按照getFieldDecorator定义
        width:100,
    },
    {
        type:'时间查询',
        label:'订单时间'
    },
    {
        type:'SELECT',
        label:'订单状态',
        field:'order_status',
        placeholder:'全部',
        // 严格按照getFieldDecorator定义
        initialValue:'1',
        width:80,
        list:[{id:'0',name:'全部'},{id:'1',name:'进行中'},{id:'2',name:'结束行程'}],
    }
]
export default class pre extends React.Component{
    render(){
        return(
            <div>
                123
                <FormClass formList={formList}/>
            </div>
        )
    }
}