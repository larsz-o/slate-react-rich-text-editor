import React, { Component, Fragment } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { BoldMark, CodeMark, ItalicMark, FormatToolBar, ListMark, UnderlineMark } from './index';

import Icon from 'react-icons-kit';
import { bold, italic, code, list, underline } from 'react-icons-kit/feather';

const initialValue = Value.fromJSON({
    document: {
        nodes: [{
            object: 'block',
            type: 'paragraph',
            nodes: [{
                object: 'text',
                leaves: [
                    { text: 'Editing text!' }
                ]
            }]
        }]
    }
})

export default class TextEditor extends Component {
    state = {
        value: initialValue
    }

    onChange = ({ value, editor }) => {
        this.setState({ value, editor });
    }

    renderMark = props => {
        switch (props.mark.type) {
            case 'bold':
                return <BoldMark {...props} />
            case 'italic':
                return <ItalicMark {...props} />
            case 'code':
                return <CodeMark {...props} />
            case 'list':
                return <ListMark {...props} />
            case 'underline':
                return <UnderlineMark {...props} />
            default:
                return props;
        }
    }

    onMarkClick = (e, type) => {
        e.preventDefault();

        if (this.editor) {
            this.editor.toggleMark(type);
        }
    }

    render() {
        return (
            <Fragment>
                <FormatToolBar>
                    <button 
                        className="tooltip-icon-button"
                        onClick={(e) => this.onMarkClick(e, 'bold')}
                    >
                        <Icon icon={bold} />
                    </button>
                    <button 
                        className="tooltip-icon-button"
                        onClick={(e) => this.onMarkClick(e, 'italic')}
                    >
                        <Icon icon={italic} />
                    </button>
                    <button
                        className="tooltip-icon-button"
                        onClick={(e) => this.onMarkClick(e, 'code')}
                    >
                        <Icon icon={code} />
                    </button>
                    <button
                        className="tooltip-icon-button"
                        onClick={(e) => this.onMarkClick(e, 'list')}
                    >
                        <Icon icon={list} />
                    </button>
                    <button
                        className="tooltip-icon-button"
                        onClick={(e) => this.onMarkClick(e, 'underline')}
                    >
                        <Icon icon={underline} />
                    </button>
                </FormatToolBar>
                <Editor
                    ref={editor => this.editor = editor}
                    value={this.state.value}
                    onChange={this.onChange}
                    renderMark={this.renderMark}
                />
            </Fragment>
        )
    }
}