import React from 'react';
import './commentList.css';
import Item from './../commentItem/commentItem';
import Form from './../commentForm/commentForm'
class commentList extends React.Component {
    constructor() {
        super()
        this.state={
            data:[
                {id: 1 , author: '路飞' , datas: '一年前' , comment: '国服第一男枪'},
                {id: 2 , author: '香克斯' , datas: '三个月前' , comment: '国服第一金克斯'},
                {id: 3 , author: '路飞' , datas: '一年前' , comment: '国服第一男枪'},
                {id: 4 , author: '路飞' , datas: '一年前' , comment: '国服第一男枪'},
                
            ]
        }
    }
    onAddCommentList(obj){
        this.setState({
            data :[...this.state.data,obj]
        })
    }  
    render(){
        let list = this.state.data.map((item,index)=>{
            return(<Item key={index} datas={item.datas} author={item.author} comment={item.comment}/>)
        })
        return(
            <div className="itemBox">
                <div>
                    <div className='firstLove'>第一次爱的人</div>
                    <Form onAddComment={this.onAddCommentList.bind(this)}  />
                    {list}
                </div>
            </div>
        )
    }
}
export default commentList;