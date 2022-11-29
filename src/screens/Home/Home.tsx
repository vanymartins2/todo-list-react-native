import { useState } from 'react'
import { View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Tasks } from '../../components/Tasks'
import uuid from 'react-native-uuid'
import { styles } from './styles'

interface Task {
  id: string | number[]
  content: string
  isComplete: boolean
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskContent, setTaskContent] = useState('')

  function handleAddTask() {
    const createdTask = {
      id: uuid.v4(),
      content: taskContent,
      isComplete: false
    }

    setTasks(prevState => [...prevState, createdTask])

    setTaskContent('')
  }

  function completeTask(id: string | number[]) {
    const updatedTasks = tasks.map(task => {
      return task.id === id
        ? { ...task, isComplete: !task.isComplete }
        : { ...task }
    })

    setTasks(updatedTasks)
  }

  function removeTask(id: string | number[]) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} />

      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            isFocused && { borderWidth: 1, borderColor: '#5E60CE' }
          ]}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#808080"
          underlineColorAndroid="transparent"
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChangeText={setTaskContent}
          value={taskContent}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <AntDesign name="pluscircleo" size={16} color="#f2f2f2" />
        </TouchableOpacity>
      </View>

      <Tasks
        tasks={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    </View>
  )
}
