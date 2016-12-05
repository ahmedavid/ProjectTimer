import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import Project from './Project';
import Modal from './Modal';
import {projectsFetch,projectsCreate,projectsDelete,projectsUpdate} from '../actions';



class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            lgShow: false
        };
    }
    componentWillMount(){
        this.props.projectsFetch();
    }

    onSubmit(project){
        console.log('PROJECT:',project)
        this.props.projectsCreate(project);
    }
    lgClose(){
        this.setState({ lgShow: false });


    }
    render() {
        const projectsList = this.props.projects.map( project => {
            return <Project key={project._id} project={project} projectsDelete={this.props.projectsDelete} projectsUpdate={this.props.projectsUpdate}/>
        });

        //ANIMATIONS OPTIONS
        const transitionOptions = {
            transitionName:"fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500,
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="alert alert-info" role="alert"><span className="glyphicon glyphicon-ok"></span> Hey Goerge versene borc!</div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-info btn-lg" onClick={()=> this.setState({lgShow:true})}> + New Project </button>
                        <Modal show={this.state.lgShow} onHide={this.lgClose.bind(this)} onSubmit={this.onSubmit.bind(this)}/>
                    </div>

                    <div className="row project-grid">
                        <ReactCSSTransitionGroup {...transitionOptions}>
                            {projectsList}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps,{projectsFetch,projectsCreate,projectsDelete,projectsUpdate})(Home)