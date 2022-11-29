import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#262626',

    border: '1px solid #333333',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    borderRadius: 8,

    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    marginBottom: 16
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: '#f2f2f2',
    borderRadius: 999,
    width: 24,
    height: 24
  },
  task: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    lineHeight: 20,

    color: '#F2F2F2'
  },
  checkedTask: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    textDecorationLine: 'line-through',
    lineHeight: 20,

    color: '#808080'
  },
  button: {
    width: 32,
    height: 32,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  pressedButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    color: '#E25858'
  }
})
