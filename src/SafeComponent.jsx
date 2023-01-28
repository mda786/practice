import React from 'react'

export default class SafeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={hasErorr:false}
    }

    static getDerivedStateFromError(error){
        return{hasErorr:true}
    }

    componentDidCatch(){

    }

    render(){
        if(this.state.hasError){
            return(<h1>there is an error</h1>)
        }
        return this.props.children
    }

}