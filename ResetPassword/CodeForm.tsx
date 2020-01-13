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
            .required('Provide a valid verification code.'),
        })}
        onSubmit={(values, formikActions) => {
          this.setState({
            submitting: true,
            serverError: null
          });

          // mimic server behaviour with timeout.
          setTimeout(() => {
            formikActions.setSubmitting(false);
            this.props.switchStage(this.props.stages.RESET);
          }, 1000);
        }}>
        {props => (
          <>
            <Error error={this.state.serverError} />
            <Note note='Input the code sent to your email address.' />
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

            <View style={formStyles.submit}>
              {this.state.submitting === true
                ? <>
                  <Spinner />
                  <Text style={formStyles.submitText}>
                    Verifying Code
                  </Text>
                </>
                :
                <Text style={formStyles.submitText} onPress={() => props.handleSubmit()}>
                  Submit Code
                </Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text onPress={() => this.props.switchStage(this.props.stages.REQUEST_LINK)}>
                Go Back
              </Text>
            </View>
          </>
        )}
      </Formik>
    );
  }
}

export default CodeForm;