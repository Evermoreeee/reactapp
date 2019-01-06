import React from 'react';
import './commentItem.css'
import { Icon } from 'antd';
class commentItem extends React.Component {
    render() {
        return(
            <div className='myItem'>
                <Icon type="pic-left" />
                <div>评论人：{this.props.author}</div>
                <div>时间：{this.props.datas}</div>
                <div>职位：{this.props.comment}</div>
            </div>
        )
    }
}
export default commentItem;