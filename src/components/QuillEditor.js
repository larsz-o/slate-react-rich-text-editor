import React, { Component } from 'react'; 
import ReactQuill from 'react-quill'; 

class QuillEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: `Write what you'd like here`
        }
    }
    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
     
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
    handleChange = (value) => {
        this.setState({
            text: value
        })
    }
    render(){
        return(
            <div>
                <ReactQuill value={this.state.text} onChange={this.handleChange} modules={this.modules} formats={this.formats}/>
            </div>
            
        )
    }
}
export default QuillEditor; 