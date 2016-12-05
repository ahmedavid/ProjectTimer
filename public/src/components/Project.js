import React, { Component } from 'react';

export default class Project extends Component {
    constructor(props){
        super(props);

        this.state = {
            showTimerList:false,
            working:false
        };
    }
    startWorking(id){
        this.props.projectsUpdate(id);
        this.setState({working:true});
    }
    stopWorking(){
        this.setState({working:false});
    }
    render() {
        const {title,created_date,_id,timer_records} = this.props.project;

        console.log('TIMER',timer_records)

        const timerList = timer_records.map((x) => {
            return <div key={x.startTime}>{x.startTime + ' - '+x.endTime}</div>
        });

        return (
            <div className="col-md-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">{title}<span onClick={this.props.projectsDelete.bind(this,_id)} className="delete-project pull-right glyphicon glyphicon-remove"></span></h3>
                    </div>
                    <div className="panel-body">
                        Project Created:{new Date(created_date).toDateString()}

                        <br/>
                        Total time spent:
                        <br/>
                        {
                            this.state.working ? <button className="btn btn-danger" onClick={this.stopWorking.bind(this)}>Stop Working</button>
                                               : <button className="btn btn-success" onClick={ this.startWorking.bind(this,_id)}>Start Working</button>
                        }
                        <br/>
                        <button className="btn btn-default" onClick={()=>this.setState({showTimerList:!this.state.showTimerList})}>Show/Hide time record details</button>
                        {
                            this.state.showTimerList ?
                                <div className="well">
                                {timerList}
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
