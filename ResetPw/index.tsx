import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text } from '../Text'
import { styles } from './styles'
import { styles as formStyles } from '../Form/styles'
import { ResetForm } from './ResetForm'
import { CodeForm } from './CodeForm'
import { PasswordForm } from './PasswordForm'

export const ResetPw = (props: any) => {

  const stages = {
    REQUEST_LINK: 'REQUEST_LINK',
    VERIFY: 'VERIFY',
    RESET: 'RESET',
  };

  const [stage, setStage] = useState(stages.REQUEST_LINK);
  const [email, setEmail] = useState(null);

  const switchStage = (stage: string) => {
    setStage(stage);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={formStyles.container}>
          <Text>
            Reset Your Password
          </Text>
          {stage === stages.REQUEST_LINK &&
            <ResetForm
              navigation={props.navigation}
              stages={stages}
              switchStage={switchStage}
              setEmail={setEmail}
            />
          }
          {stage === stages.VERIFY &&
            <CodeForm
              navigation={props.navigation}
              stages={stages}
              switchStage={switchStage}
            />
          }
          {stage === stages.RESET &&
            <PasswordForm
              navigation={props.navigation}
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

export default ResetPw;