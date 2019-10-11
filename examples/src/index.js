import React from 'react';
import {render} from 'react-dom';
import MyComponent from '../../src';
import BaseForm from '../../src/BaseForm'
import 'antd/dist/antd.css'
const App = () => (
    <MyComponent/>
);
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
            list:[{id:'0',name:'全部'},{id:'1',name:'北京'},{id:'2',name:'天津'},{id:'3',name:'上海'}],
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
const formList2 = [
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
var params
//请求接口或者mock,可以不用
// function requestList(){
//     axios.ajax({
//         url:'/map/bike_list',
//         data:{
//             params:this.params
//         }
//     }).then((res)=>{
//         if(res.code === 0 ){
//             this.setState({
//                 total_count:res.result.total_count
//             })
//             this.renderMap(res)
//         }
//     })
// }
function handleFilter (paramsFromChild){
    // console.log('params',paramsFromChild)
    params = paramsFromChild;
    // console.log('params father',params)
}

//需要传入formList和提交的方法filterSubmit
//formList格式如上,filterSubmit需要接收一个子组件传入的表单值的字典.
const Form = () => (
    <BaseForm formList={formList} filterSubmit={handleFilter}/>
)
class FormClass extends React.Component{
    // constructor(){
    //     super(props);
    //     console.log(this.props);
    //     this.formList=this.props.formList;
    //     console.log("formList",this.formList)
    // }
    render(){
        console.log("formclass")
        return(
            <BaseForm formList={formList} filterSubmit={handleFilter}/>
        )
    }
}
const FormTest = (params) => {
    if(JSON.stringify(params) === '{}'){
        console.log("form test 无list",params)
        return <BaseForm formList={formList} filterSubmit={handleFilter}/>
    }else{
        console.log("form test list",params)
        return <BaseForm formList={params.formList.formList} filterSubmit={handleFilter}/>
    }
}
function input (input) {
    //包含所有输入
    console.log("input",input)
    if(JSON.stringify(input) !== '{}'){
        return <FormTest formList={input}/>
    }else{
        console.log("no input")
        return <FormTest/>
    }
}
class Entry extends React.Component{
    constructor(props){
        super(props)
        if(props){
            this.params = props
        }else{
            this.params = null
        }
    }
    render(){
        var output 
        if(this.params){
            output = input(this.params)
        }else{
            output = input()
        }
        // console.log(output)
        if(output){
            return output
        }
        return <div>NO INPUT</div>;
    }
}
// render(<FormTest formList={formList}/>,document.getElementById("root"));
render(<Entry/>,document.getSelection);