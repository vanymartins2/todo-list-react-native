import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    marginTop: 32,
    marginBottom: 32
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flexDirection: 'row'
  },
  created: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    color: '#4EA8DE'
  },
  concluded: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    color: '#8284FA'
  },
  counter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    minWidth: 25,
    minHeight: 19,
    marginLeft: 8,

    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',

    color: '#d9d9d9',
    backgroundColor: '#333333',
    borderRadius: 999
  },
  list: {
    marginTop: 20
  }
})
