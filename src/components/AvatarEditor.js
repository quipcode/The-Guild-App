import React from 'react'
import AvatarEditor from 'react-avatar-editor';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

function RenderAvatarImage({image}){
    return(
        image
    )
}

// function MyEditor({image}){
//     return (
//         <AvatarEditor
//         // image="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
//         image={image.image.medium_url}
//         width={250}
//         height={250}
//         border={50}
//         color={[255, 255, 255, 0.6]} // RGBA
//         scale={1.2}
//         rotate={0}
//       />
//     );
// }

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
            scaleValue: 1,
            borderRadiusValue: 0,
            centerVertical: false,
            centerHorizontal: true,
            isModalOpen: false,
            image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
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

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    //closing the avatar editor modal
    handleClose = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
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
    updatescaleValue(evt){
        this.setState({
            scaleValue: evt.target.value
        });
    }
    updateBorderRadiusValue(evt){
        this.setState({
            borderRadiusValue: evt.target.value
        });
    }
    
// .modal-body {
//     position: relative; /* This avoids whatever it's absolute inside of it to go off the container */
//     height: 250px; /* let's imagine that your login box height is 250px . This height needs to be added, otherwise .img-responsive will be like "Oh no, I need to be vertically aligned?! but from which value I need to be aligned??" */
// }




    //Thought about adding feature to allow users to center vertical and horizontal...but its a pain...it involes updating attribute 'position' as per property doc position is: The x and y co-ordinates (in the range 0 to 1) of the center of the cropping area of the image. Note that if you set this prop, you will need to keep it up to date via onPositionChange in order for panning to continue working....so no


    // updateCenterVertical(evt){
    //     this.setState({
    //         centerVertical: evt.target.value
    //     });
    // }
    // updateCenterHorizontal(evt){
    //     this.setState({
    //         centerHorizontal: evt.target.value
    //     });
    // }

    render() {
        const avaEditorStyle = {
            color: 'blue',
            margin: 'auto',
            position: 'center',
            // height: '250px'
            // backgroundImage: 'url(' + imgUrl + ')',
        };
        return (
        
            <React.Fragment>
                
                    
                    
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="scaleAvatar">Scale: {this.state.scaleValue}</Label>
                                <Input type="range" min="0" max="2.5" step="0.01" value={this.state.scaleValue} onChange={evt => this.updatescaleValue(evt)} />
                                {/* <Input type="text" id="username" name="username" innerRef={input => this.username = input} /> */}
                                <p id="demo"></p>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="borderRadiusAvatar">Border Radius: {this.state.borderRadiusValue} </Label>
                                {/* <Input type="password" id="password" name="password" innerRef={input => this.password = input} /> */}
                                <Input type="range" min="0" max="125" value={this.state.borderRadiusValue} onChange={evt => this.updateBorderRadiusValue(evt)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="rotateAvatar">Rotate: {this.state.rotateValue}</Label>
                                {/* <Input type="password" id="password" name="password" innerRef={input => this.password = input} /> */}
                                <Input type="range" min="0" max="360" value={this.state.rotateValue} onChange={evt => this.updateRotateValue(evt)} />
                                
                            </FormGroup>
                            {/* <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup> */}
                            <FormGroup>
                                
                                <AvatarEditor
                                    ref={this.setEditorRef}
                                    // image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                    // image={this.state.image}
                                    image={this.props.image.image.medium_url}
                                    width={250}
                                    height={250}
                                    border={20}
                                    // scale={1.2}
                                    borderRadius={this.state.borderRadiusValue}
                                    scale={this.state.scaleValue}
                                    rotate={this.state.rotateValue}
                                    style={avaEditorStyle}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Upload File: </Label>
                                <input type="file" name="file" />
                            </FormGroup>
                           
                            <Button type="Submit" value="submit" color="primary">Save</Button>
                            {/* <Button  value="submit" color="secondary" onClick = {this.handleClose}>Cancel</Button> */}
                            
                        </Form>
                
                        
                    
                
                {/* <div class="container">
                    <div class="row">
                            <label>Scale </label>
                        <input type="range" min="0" max="2.5" step="0.01" value={this.state.scaleValue} onChange={evt => this.updatescaleValue(evt)} />
                        <p id="demo">{this.state.scaleValue}</p>
                    </div>
                    <div class="row">
                            <label>Border Radius </label>
                            
                        <input type="range" min="0" max="125" value={this.state.borderRadiusValue} onChange={evt => this.updateBorderRadiusValue(evt)} />
                        <p id="demo">{this.state.borderRadiusValue}</p>
                    </div>
                   
                    <div class="row">
                        <label>Rotate </label>
                        <input type="range" min="0" max="360" value={this.state.rotateValue} onChange={evt => this.updateRotateValue(evt)} />
                        <p id="demo">{this.state.rotateValue}</p>
                    </div>
                    {/* <div class="row">
                        <label>Center </label>
                        <button type="button" class="btn btn-primary" onClick={evt => this.updateCenterVertical(evt)}>Vertical</button>
                        <button type="button" class="btn btn-secondary">Horizontal</button>

                    </div> 
                </div> */}
                <div>
                    
                    {/* <AvatarEditor
                        ref={this.setEditorRef}
                        // image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                        image="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
                        width={250}
                        height={250}
                        border={20}
                        // scale={1.2}
                        borderRadius={this.state.borderRadiusValue}
                        scale={this.state.scaleValue}
                        rotate={this.state.rotateValue}
                        
                    /> */}
                    
                        
                       
                </div>
               
            </React.Fragment>
            
        )
    }
}

export default MyEditor