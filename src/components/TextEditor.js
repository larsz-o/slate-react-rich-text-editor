import React, { Component } from 'react'; 
import { Editor } from 'slate-react';
import { Value } from 'slate';
import BoldMark from './BoldMark'; 

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})
// Define our app...
class TextEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: initialValue
        }
    }
    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
      this.setState({ value })
    }
    onKeyDown = (event, change) => {
        // if the user is not pressing the control key, return out of the function
        if(!event.ctrlKey){return}
        event.preventDefault(); 
        // if the user presses the control key, enter switch statement to determine what to do 
        switch(event.key){
            // when "b" is pressed, add a bold mark to the text
            case 'b': {
                change.toggleMark('bold')
                return true; 
            }
        }
    }

    renderMark = props => {
        switch(props.mark.type){
            case 'bold': 
            return <BoldMark {...props} />
        }
    }
    // Render the editor.
    render() {
      return <Editor value={this.state.value} 
      onChange={this.onChange} 
      onKeyDown={this.onKeyDown} 
      renderMark={this.renderMark}/>
    }
  }
  export default TextEditor; 