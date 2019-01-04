import React, { Component } from 'react'; 
import { Editor } from 'slate-react';
import { Value } from 'slate';

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
    // Render the editor.
    render() {
      return <Editor value={this.state.value} onChange={this.onChange} />
    }
  }
  export default TextEditor; 