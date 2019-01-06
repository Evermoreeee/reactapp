import React from 'react';
import './commentBox.css';
import List from './../commentList/commentList';

class commentBox extends React.Component {  
    render(){
        return(
            <div className="myBox">
                <div className="topTitle">音乐人阿庄</div>
                <List/>
            </div>
        )
    }
}
export default commentBox;