import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { styles as formStyles } from '../Form/styles'
import { TextInputWithIcon } from '../Form/TextInputWithIcon'
import { Note } from '../Form/Note'
import { Error } from '../Form/Error'
import { Text } from '../Text'
import * as Yup from 'yup'
import * as consts from '../../constants'
import { Spinner } from '../Form/Spinner'

export class PasswordForm extends React.Component<any, any> {

  state = {
    submitting: false,
    serverError: null,
    passwordReset: false,
  }

  componentWillReceiveProps () {
    this.setState({
      passwordReset: false,
    })
  }

  render () {

    return (
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required('Password is missing'),
        })}
        onSubmit={(values, formikActions) => {
          this.setState({
            submitting: true,
            serverError: null
          });

          fetch(consts.API_URL + '/auth/reset-password', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              email: this.props.email,
              password: values.password,
            })
          })
            .then(res => res.json())
            .then(data => {

              formikActions.setSubmitting(false);
              this.setState({
                submitting: false,
                passwordReset: true,
              });

              setTimeout(() => {
                this.props.navigation.navigate('SignIn');
              }, 2000);
            })
            .catch(e => {
              formikActions.setSubmitting(false);
              this.setState({ submitting: false });
            });
        }}>
        {props => (
          <>
            <Error error={this.state.serverError} />
            <Note note='Please input a new password.' />
            <TextInputWithIcon
              ionIcon='ios-lock'
              name='passwprd'
              autoCompleteType='password'
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              placeholder="Password"
              style={{ ...formStyles.input }}
              secureTextEntry={true}
              placeholderTextColor='#666'
              clearButtonMode='while-editing'
              maxLength={100}
              editable={!props.isSubmitting}
            />

            <View style={{
              borderColor: '#ddd',
              ...formStyles.submit,
              marginTop: 30,
            }}
            >
              {this.state.submitting === true
                ? <>
                  <Spinner />
                  <Text style={formStyles.submitText} invertColor>
                    Resetting Password
                  </Text>
                </>
                :
                <Text
                  style={formStyles.submitText} invertColor
                  onPress={() => props.handleSubmit()}
                >
                  {this.state.passwordReset === true
                    ? 'Password Successfully Reset'
                    : 'Reset Password'
                  }
                </Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                onPress={() => this.props.switchStage(this.props.stages.REQUEST_LINK)}
                invertColor
              >
                Enter a Different Email Address
              </Text>
            </View>
          </>
        )}
      </Formik>
    );
  }
}

export default PasswordForm;