import React from 'react'
import AvatarEditor from 'react-avatar-editor';


class MyEditor extends React.Component {

    
    constructor(props) {
        super(props);
        this.slider = React.createRef();
        this.output = React.createRef();
        

        // This binding is necessary to make `this` work in the callback
        
        this.updateDemo = this.updateDemo.bind(this);
        this.state = {
            inputValue: '',
            rotateValue: 0,
            zoomValue: 0,
            borderRadiusValue: 0,
            centerVertical: false,
            centerHorizontal: true
        };
        
    }
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

    
 
    updateDemo = () =>{
        // this.output.innerHTML = this.slider.value; // Display the default slider value

        // // Update the current slider value (each time you drag the slider handle)
        // this.slider.oninput = function () {
        //     this.output.innerHTML = this.value;
        // } 
        console.log(this.state)
        
    }
    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
    updateRotateValue(evt){
        this.setState({
            rotateValue: evt.target.value
        });
    }
    updateZoomValue(evt){
        this.setState({
            zoomValue: evt.target.value
        });
    }
    updateBorderRadiusValue(evt){
        this.setState({
            borderRadiusValue: evt.target.value
        });
    }
    updateCenterVertical(evt){
        this.setState({
            centerVertical: evt.target.value
        });
    }
    updateCenterHorizontal(evt){
        this.setState({
            centerHorizontal: evt.target.value
        });
    }

    render() {
        return (
        
            <React.Fragment>
                <div class="container">
                    <div class="row">
                            <label>Zoom </label>
                            <input type="range" min="0" max="100" />
                    </div>
                    <div class="row">
                            <label>Border Radius </label>
                            
                        <input type="range" min="0" max="100" value={this.state.borderRadiusValue} onChange={evt => this.updateBorderRadiusValue(evt)} />
                        <p id="demo">{this.state.borderRadiusValue}</p>
                    </div>
                   
                    <div class="row">
                        <label>Rotate </label>
                        <input type="range" min="0" max="360" value={this.state.rotateValue} onChange={evt => this.updateRotateValue(evt)} />
                        <p id="demo">{this.state.rotateValue}</p>
                    </div>
                    <div class="row">
                        <label>Center </label>
                        <button type="button" class="btn btn-primary">Vertical</button>
                        <button type="button" class="btn btn-secondary">Horizontal</button>

                    </div>
                </div>
                <div>
                    
                    <AvatarEditor
                        ref={this.setEditorRef}
                        image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                        width={250}
                        height={250}
                        border={50}
                        scale={1.2}
                        borderRadius={0}
                        
                    />
                    
                        
                        <form class="range-field my-4 w-25">
                            <label>helper</label>
                            <input type="range" min="0" max="100" />
                        </form>
                    
                </div>
               
            </React.Fragment>
            
        )
    }
}

export default MyEditor