import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Todo from '../screens/Todo'

const screens ={
   
    Todo:{
        screen:Todo
    }
}   


const rootStack = createStackNavigator(screens);

export default createAppContainer(rootStack);