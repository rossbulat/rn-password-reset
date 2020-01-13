import React from 'react'
import { View } from 'react-native'
import { styles as formStyles } from '../Form/styles'
import { Formik } from 'formik'
import { TextInputWithIcon } from '../Form/TextInputWithIcon'
import { Note } from '../Form/Note'
import { Error } from '../Form/Error'
import { Text } from '../Text'
import * as Yup from 'yup'
import { Spinner } from '../Form/Spinner'

export class CodeForm extends React.Component<any, any> {

  state = {
    submitting: false,
    serverError: null,
  }

  render () {

    return (
      <Formik
        initialValues={{
          code: '',
        }}
        validationSchema={Yup.object({
          code: Yup.string()
            .required('Please input your verification code.'),
        })}
        onSubmit={(values, formikActions) => {
          this.setState({
            submitting: true,
            serverError: null
          });

          fetch(consts.API_URL + '/auth/verify-reset-password-code', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              code: values.code,
            })
          })
            .then(res => res.json())
            .then(data => {
              formikActions.setSubmitting(false);

              if (data.ack === 'success') {
                this.props.switchStage(this.props.stages.RESET);
              } else {
                this.setState({
                  submitting: false,
                  serverError: data.response.reason
                })
              }
            })
            .catch(e => {
              formikActions.setSubmitting(false);
            });
        }}>
        {props => (
          <>
            <Error error={this.state.serverError} />
            <Note note='Please input the code sent to your email address.' />
            <TextInputWithIcon
              name='code'
              ionIcon='ios-arrow-dropright-circle'
              onChangeText={props.handleChange('code')}
              onBlur={props.handleBlur('code')}
              value={props.values.code}
              placeholder="Input Code"
              style={{ ...formStyles.input }}
              autoCapitalize='none'
              placeholderTextColor='#666'
              clearButtonMode='while-editing'
              keyboardType='numeric'
              maxLength={6}
              editable={!props.isSubmitting}
            />

            <View style={{
              borderColor: '#ccc',
              ...formStyles.submit,
              marginTop: 30,
            }}
            >
              {this.state.submitting === true
                ? <>
                  <Spinner />
                  <Text style={formStyles.submitText} invertColor>
                    Verifying Code
                  </Text>
                </>
                :
                <Text
                  style={formStyles.submitText} invertColor
                  onPress={() => props.handleSubmit()}
                >
                  Submit Code
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

export default CodeForm;