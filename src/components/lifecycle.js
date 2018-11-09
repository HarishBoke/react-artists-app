import React, {Component} from 'react';

class LifeCycle extends Component {
    // 1 . DEFAULT STATE
    constructor(props){
        super(props)
    
    // 2. SET INITIAL STATE
        this.state = {
            title: "Harish",
            body: "welcome to react lifecycle"
        };
    }
    // 3. BEFORE GETS CREATED
        componentWillMount(){
            console.log("before components gets created");
        }

    // 5. AFTER COMPONENT IS MOUNTD 
    componentDidMount(){
        console.log("AFter components is mounted");
    }
    //
    componentWillUpdate(){
        console.log("component will update");
    }
    componentDidUpdate(){
        console.log("component did udpate");
    }
    shouldComponentUpdate(nextProp, nextState){
            if(nextProp === ''){
                return false
            }
            return true;
            //always need to return boolean
    }
    componentWillReceiveProps(){
        //when recieve props through route or an event - not on default or init state
    }
    componentWillUnmount(){
        // this gets call when we are naviting to other component 
        // as good as destory method for component
    }

    // 4. RENDER JSX
        render(){
            return(
                <>
                   <h1> {this.state.title}</h1>
                   <p>
                       {this.state.body}
                   </p>
                </>
            )
        }
    
}