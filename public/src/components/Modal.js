import React,{Component} from 'react';
import {Modal,Button} from 'react-bootstrap';

export default class MyModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.title.length > 0)
        {
            const newPorject = {
                title:this.state.title.trim(),
                created_date:new Date().toISOString()
            };
            this.props.onSubmit(newPorject);
            this.setState({title:''});
            this.props.onHide();
        }

    }

    render(){
        return(
            <Modal bsSize='small' aria-labelledby="contained-modal-title-lg" show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">New Project</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Modal.Body>

                            <div className="form-group">
                                <input required autoFocus type="text" className="form-control" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} placeholder="Project Title..."/>
                            </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                        <Button type="submit" className="btn btn-success">Save Project</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}