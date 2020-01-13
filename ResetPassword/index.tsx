import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text } from '../Text'
import { styles } from './styles'
import { styles as formStyles } from '../Form/styles'
import { ResetForm } from './ResetForm'
import { CodeForm } from './CodeForm'
import { NewPasswordForm } from './NewPasswordForm'

export const ResetPassword = (props: any) => {

  enum stages {
    REQUEST_LINK = 'REQUEST_LINK',
    VERIFY = 'VERIFY',
    RESET = 'RESET',
  }

  const [stage, setStage] = useState(stages.REQUEST_LINK);
  const [email, setEmail] = useState(null);

  const switchStage = (stage: stages) => {
    setStage(stage);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={formStyles.container}>
          <Text style={{ marginBottom: 30 }}>
            Reset Your Password
          </Text>
          {stage === stages.REQUEST_LINK &&
            <ResetForm
              stages={stages}
              switchStage={switchStage}
              setEmail={setEmail}
            />
          }
          {stage === stages.VERIFY &&
            <CodeForm
              stages={stages}
              switchStage={switchStage}
            />
          }
          {stage === stages.RESET &&
            <NewPasswordForm
              stages={stages}
              switchStage={switchStage}
              email={email}
            />
          }
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default ResetPassword;