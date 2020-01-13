import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { styles as formStyles } from '../Form/styles'
import { TextInputWithIcon } from '../Form/TextInputWithIcon'
import { Note } from '../Form/Note'
import { Error } from '../Form/Error'
import { Text } from '../Text'
import * as Yup from 'yup'
import { Spinner } from '../Form/Spinner'

export class PasswordForm extends React.Component<any, any> {

  state = {
    submitting: false,
    serverError: null,
    passwordReset: false,
  }

  componentDidMount () {
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

          // mimic server behaviour with timeout.
          setTimeout(() => {
            formikActions.setSubmitting(false);
            this.setState({
              submitting: false,
              passwordReset: true,
            });
          }, 1000);
        }}>
        {props => (
          <>
            <Error error={this.state.serverError} />
            <Note note='Successfully verified. Input a new password' />
            <TextInputWithIcon
              ionIcon='ios-lock'
              name='password'
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
            <View style={formStyles.submit}>
              {this.state.submitting === true
                ? <>
                  <Spinner />
                  <Text style={formStyles.submitText}>
                    Resetting Password
                  </Text>
                </>
                :
                <Text style={formStyles.submitText} onPress={() => props.handleSubmit()}>
                  {this.state.passwordReset === true
                    ? 'Password Successfully Reset'
                    : 'Reset Password'
                  }
                </Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text onPress={() => this.props.switchStage(this.props.stages.REQUEST_LINK)}>
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