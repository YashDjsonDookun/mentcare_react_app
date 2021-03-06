import React, { Component} from 'react'
import '../DoctorInfoPanel.css'
import { Header, Segment } from 'semantic-ui-react'

export default class DoctorInfo_Panel extends Component {
    constructor(props){
        super(props);
        this.state ={
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            time : new Date().toLocaleTimeString()
          })
        }, 1000)
    }

    componentWillUnmount() {
        this.setState({
            time: null
        })
    }

    render() {
        return (
            <Segment raised>
                <div className="doctor-info-panel">
                    <Header as='h1' color='teal' textAlign='center'>
                        <u>MENTCARE SYSTEM</u>
                    </Header>
                    <div className="doctorInfo-wraper">
                        <div className="doctorInfo">
                            <h2>DOCTOR:</h2>
                            <div className="doc-property">
                                <div>
                                    <h4>DOCTOR ID:</h4>
                                    <p>{this.props.docInfo.doctorID}</p>
                                </div>
                                <div>
                                    <h4>First Name:</h4>
                                    <p>{this.props.docInfo.firstName}</p>
                                </div>
                                <div>
                                    <h4>Last Name:</h4>
                                    <p>{this.props.docInfo.lastName}</p>
                                </div>
                                <div>
                                    <h4>CATEGORY:</h4>
                                    <p>{this.props.docInfo.category}</p>
                                </div>
                                <div>
                                    <h4>CLEARANCE LEVEL:</h4>
                                    <p>{this.props.docInfo.clearance_level}</p>
                                </div>
                            </div>
                        </div>
                        <div className="Date">
                            <h2>{this.state.time}<br/>{new Date().toDateString()}</h2>
                        </div>
                    </div>
                </div>
            </Segment>
        )
    }
}