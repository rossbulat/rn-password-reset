import React from 'react'
import { View } from 'react-native'
import { styles as formStyles } from '../Form/styles'
import { Formik } from 'formik'
import { TextInputWithIcon } from '../Form/TextInputWithIcon'
import { Error } from '../Form/Error'
import { Note } from '../Form/Note'
import { Text } from '../Text'
import * as Yup from 'yup'
import { Spinner } from '../Form/Spinner'

export class ResetForm extends React.Component<any, any> {

  state = {
    submitting: false,
    serverError: null,
  }

  render () {

    return (
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email address is required'),
        })}
        onSubmit={(values, formikActions) => {
          this.setState({
            submitting: true,
            serverError: null
          });

          fetch(consts.API_URL + '/auth/reset-password-request', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              email: values.email,
            })
          })
            .then(res => res.json())
            .then(data => {
              formikActions.setSubmitting(false);
              this.props.setEmail(values.email);
              this.props.switchStage(this.props.stages.VERIFY);
            })
            .catch(e => {
              formikActions.setSubmitting(false);
            });
        }}>
        {props => (
          <>
            <Error error={this.state.serverError} />
            <Note note='Please provide your account email address to request a password reset code. You will receive your a code to your email address if it is valid.' />
            <TextInputWithIcon
              name='email'
              ionIcon='ios-person'
              autoCompleteType='email'
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder="Email Address"
              style={{ ...formStyles.input }}
              autoCapitalize='none'
              placeholderTextColor='#666'
              clearButtonMode='while-editing'
              keyboardType='email-address'
              maxLength={100}
              editable={!props.isSubmitting}
            />

            <View style={{
              borderColor: '#ccc',
              ...formStyles.submit,
              marginVertical: 30,
            }}
            >
              {this.state.submitting === true
                ? <>
                  <Spinner />
                  <Text style={formStyles.submitText} invertColor>
                    Processing Request
                  </Text>
                </>
                :
                <Text
                  style={formStyles.submitText}
                  onPress={() => props.handleSubmit()}
                  invertColor
                >
                  Request Reset Link
              </Text>
              }
            </View>
          </>
        )}
      </Formik>
    );
  }
}

export default ResetForm;