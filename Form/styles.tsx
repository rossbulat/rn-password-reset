import { StyleSheet } from 'react-native'
import { fontSizes, borderRadius } from '../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: borderRadius.tab,
    paddingHorizontal: 14,
    paddingVertical: 8,
    minHeight: 46,
  },
  noteText: {
    fontSize: fontSizes.secondary,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
    fontWeight: '500',
  },

  submitText: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    borderRadius: 6,
    overflow: 'hidden',
    width: '100%',
  },
  buttonText: {
    padding: 10,
    fontWeight: '600',
    fontSize: fontSizes.default,
    textAlign: 'center'
  },
  error: {
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  errorText: {
    color: '#ffdfdf',
    fontSize: fontSizes.note,
    fontWeight: 'bold',
  },
  errorIcon: {
    color: '#ffdfdf',
    marginRight: 8,
  },
  inputLabel: {
    width: '100%',
    fontSize: fontSizes.note,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginTop: 15,
  },
  inputWrap: {
    width: '100%',
    marginVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 14,
  },
  input: {
    paddingVertical: 13,
    fontSize: fontSizes.default,
    fontWeight: '600',
    flexGrow: 1,
  },
});

export default styles;