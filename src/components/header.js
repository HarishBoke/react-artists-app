import React,{Component} from 'react';

// internal style with JS
// Functional component
// const Header = () => {
//     return <div>Header Component</div>
// }

// Class component

class Header extends Component{
    constructor(props){
        super(props);
        
         this.state = {
            //title: 'The keyword values are: ',
            keywords: ''
         }
         console.log(props);
    }
    
    inputChange(e){
        this.setState({
            keywords: e.target.value
        });
        this.props.newsSearch(e.target.value);
        //console.log(this.state.keyword);
    }
    render() {
        // internal style with JS
        // const styles = {
        //     header:{
        //         background:'#03a9fa'
        //     },
        //     logo:{
        //         color: '#fff',
        //         textAlign: 'center',
        //         fontFamily: 'tahoma'
        //     }

        // }
        return(
            // <header style={styles.header}>
            //     <div style={styles.logo}>LOGO</div>
            //     <input /> 
            // </header>

            <header>
                <div className="logo" onClick={()=>console.log("clicked on logo")}>LOGO</div>
                <input onChange={this.inputChange.bind(this)} /> 
                {/* <div>{this.state.title}</div>
                <div>{this.state.keywords}</div> */}
            </header>
        )
    }
};
//https://github.com/ferlobo1985/react-redux-course

export default Header;