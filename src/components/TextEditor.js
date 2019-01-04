import React, { Component, Fragment } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import Icon from 'react-icons-kit'; 
import { bold } from 'react-icons-kit/feather/bold'; 
import { italic } from 'react-icons-kit/feather/italic'; 
import {BoldMark, ItalicMark, FormatToolbar} from './index.js';


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
                                text: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
})
// Define our app...
export default class TextEditor extends Component {
    state = {
        value: initialValue
    }

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
        this.setState({ value })
    }
    // onKeyDown = (event, change) => {
    //     // if the user is not pressing the control key, return out of the function
    //     if (!event.ctrlKey) { 
    //         console.log('no control hit');
    //             return;
    //     }
    //     event.preventDefault();
    //     // if the user presses the control key, enter switch statement to determine what to do 
    //     switch (event.key) {
    //         // when "b" is pressed, add a bold mark to the text
    //         case 'b': {
    //             change.toggleMark('bold');
    //             return true;
    //         }
    //         case 'i': {
    //             change.toggleMark('italic');
    //             return true;
    //         }
    //         default: {
    //             return;
    //         }
    //     }
    // }
    renderMark = props => {
        switch (props.mark.type) {
            case 'bold':
                return <BoldMark {...props} />
            case 'italic':
                return <ItalicMark {...props} />
            default: {
                return; 
            }
        }
    }
    // Render the editor.
    render() {
        return (
            <Fragment>
                <FormatToolbar>
                    <button className="tooltip-icon-button">
                        <Icon icon={bold}/>
                    </button>
                    <button className="tooltip-icon-button">
                        <Icon icon={italic}/>
                    </button>
                </FormatToolbar>
                <Editor value={this.state.value}
                    onChange={this.onChange}
                    // onKeyDown={this.onKeyDown}
                    renderMark={this.renderMark} />
            </Fragment>

        )
    }
}
