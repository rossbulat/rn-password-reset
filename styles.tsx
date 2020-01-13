import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingTop: 0,
    marginBottom: 12,
    textAlign: 'left',
    width: '100%',
  },
  documentContainer: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 50,
  },
  fixedFooter: {
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  subHeader: {
    width: '100%',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  iconRight: {
    width: 26,
    height: 26,
    marginRight: 8,
  },
  iconLeft: {
    width: 26,
    height: 26,
    marginLeft: 8,
  },
})

export default globalStyles;