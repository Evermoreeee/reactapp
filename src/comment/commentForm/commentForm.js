import React from 'react';
import './commentForm.css'

class commentForm extends React.Component {
    addCommon(){
        let author = this.refs.txtAuthor.value;
        let datas = this.refs.txtDatas.value;
        let comment = this.refs.txtComment.value;
        // console.log(datas)
        var obj = {"author": author , "datas": datas , "comment": comment};
        this.props.onAddComment(obj);
    }
    render() {
        return(
            <div className='myForm'>
                <div >姓名: <input ref="txtAuthor" /> </div>
                <div>时间：<input ref="txtDatas" /> </div>
                <div>职位：<input ref="txtComment" /> </div>
                <div onClick={this.addCommon.bind(this)}>保存</div>
            </div>
        )
    }
}
export default commentForm;