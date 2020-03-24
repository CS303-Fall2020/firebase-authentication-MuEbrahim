import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import signIn from '../screens/signIn'
import signUp from '../screens/signUp'
import forgetPassword from '../screens/forgetPassword'
import Todo from '../screens/Todo'

const screens ={
    SignIn:{
        screen:signIn
    },
    SignUp:{
        screen:signUp
    },
    ForgetPassword:{
        screen:forgetPassword
    },
    Todo:{
        screen:Todo
    }
}   


const homeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerLeft:null
    }
});

export default createAppContainer(homeStack);