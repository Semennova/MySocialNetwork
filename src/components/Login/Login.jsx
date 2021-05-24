import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../assets/img/FormControls/FormControls'
import { required } from '../../utils/validators'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import { authAPI } from '../../api/api'


let LoginForm = (props) => {
  
    return   <form onSubmit={props.handleSubmit}>
    <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
    </div>

    <div>
        <Field placeholder={'Password'}  name={'password'}  component={Input} validate={[required]} type='password'/>
    </div>
    <div>
        <Field type={'checkbox'}  name={'rememberMe'} component={Input} validate={[required]}/> remember me
    </div>
    <div>
        <button>Log in</button>
    </div>
</form>
}

  
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    
    return <div>
        <h1>LOGIN</h1>

        <LoginReduxForm onSubmit={onSubmit}/>
        
    </div>
    
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)