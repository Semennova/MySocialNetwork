import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../assets/FormControls/FormControls'
import { required } from '../../utils/validators'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import s from '../../assets/FormControls/FormControls.module.css'


let LoginForm = ({handleSubmit, error, captchaUrl}) => {
 
  debugger
    return   <form onSubmit={handleSubmit}>
    <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
    </div>

    <div>
        <Field placeholder={'Password'}  name={'password'}  component={Input} validate={[required]} type='password'/>
    </div>
    <div>
        <Field type={'checkbox'}  name={'rememberMe'} component={Input} validate={[]}/> remember me
    </div>

    {captchaUrl && <img src={captchaUrl}/>}
    {captchaUrl && <Field placeholder={'Enter symbols from image'}  name={'captcha'}  component={Input} validate={[required]} />}


    { error && <div className={s.formSummeryError}>
        {error}
    </div>}
    

    
    <div>
        <button>Log in</button>
    </div>
</form>
}

  
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>

        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        
    </div>
    
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)