import React, {Component} from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class App extends Component {
    state = {};
    render(){
        return(
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9">
                            <Event title = "Meeting with John" time="10:00" />
                            <Event title= "Blow up moon" time="now" />
                        </MDBCol>
                        <MDBCol md="3">
                            <p>Does this show in the right column?</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}
class Event extends Component{
    state = {};
    render(){
        return(
            <React.Fragment>
                <h3>{this.props.time} - {this.props.title}</h3>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));