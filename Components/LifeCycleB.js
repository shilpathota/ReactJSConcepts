import React, {Component} from 'react'

class LifeCycleB extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'coding concepts'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LiceCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

    render(){
        console.log('lifecycleB render')
        return <div>LifeCycle B</div>

    }
}

export default LifeCycleB