import React from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends React.Component {

    
    onClickSave = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage()

            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = this.editor.getImageScaledToCanvas()
        }
    }

    setEditorRef = (editor) => this.editor = editor;

 
    render() {
        return (
            <AvatarEditor
                ref={this.setEditorRef}
                image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                width={250}
                height={250}
                border={50}
                scale={1.2}
            />
        )
    }
}

export default MyEditor