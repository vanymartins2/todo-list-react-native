import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="clipboard-text-multiple-outline"
          size={56}
          color="#808080"
        />
      </View>

      <Text style={styles.message}>Você ainda não tem tarefas cadastradas</Text>

      <Text style={styles.info}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
