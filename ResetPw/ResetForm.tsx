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
          email: 'me@email.com',
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

          // server validation here
          this.props.setEmail(values.email);
          this.props.switchStage(this.props.stages.VERIFY);
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

            <View style={formStyles.submit}>
              {this.state.submitting === true
                ? <>
                  <Spinner />
                  <Text style={formStyles.submitText}>
                    Processing Request
                  </Text>
                </>
                :
                <Text style={formStyles.submitText} onPress={() => props.handleSubmit()}>
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