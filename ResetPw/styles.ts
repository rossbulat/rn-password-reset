import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  scrollContainer: {
    width: '100%',
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoHold: {
    paddingTop: 40,
  },
  options: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginTop: 15,
    flexGrow: 1,
  },
  or: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 12,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 15,
    marginHorizontal: 4,
  },
});

export default styles;