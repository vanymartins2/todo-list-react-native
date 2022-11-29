import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    padding: 24
  },
  image: {
    height: 32,
    marginTop: 48,
    marginBottom: 40
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    border: '1px solid #0D0D0D',
    borderRadius: 6,
    marginRight: 4,
    color: '#f2f2f2'
  },
  button: {
    minWidth: 56,
    minHeight: 56,
    padding: 18,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
