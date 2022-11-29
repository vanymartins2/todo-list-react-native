import { useState } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { EmptyList } from '../EmptyList'
import { ListItem } from '../ListItem'
import { styles } from './styles'

interface Task {
  id: string | number[]
  content: string
  isComplete: boolean
}

interface TasksProps {
  tasks: Task[]
  removeTask: (id: string | number[]) => void
  completeTask: (id: string | number[]) => void
}

export function Tasks({ tasks, removeTask, completeTask }: TasksProps) {
  const [isDeletePressed, setIsDeletePressed] = useState(false)

  function handleDeleteTask(id: string | number[]) {
    setIsDeletePressed(true)

    Alert.alert('Remover', `Remover esta tarefa?`, [
      {
        text: 'Sim',
        onPress: () => {
          removeTask(id)
          setIsDeletePressed(false)
        }
      },
      {
        text: 'Não',
        onPress: () => setIsDeletePressed(false),
        style: 'cancel'
      }
    ])
  }

  const completedTasksAmount = tasks.filter(
    task => task.isComplete === true
  ).length

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.counter}>{tasks.length}</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.concluded}>Concluídas</Text>
          <Text style={styles.counter}>{completedTasksAmount}</Text>
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              id={item.id}
              task={item.content}
              changeStatus={completeTask}
              pressed={isDeletePressed}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  )
}
