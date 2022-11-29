import { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'

interface ListItemProps {
  id: string | number[]
  task: string
  pressed: boolean
  changeStatus: (id: string | number[]) => void
  onDelete: () => void
}

export function ListItem({
  id,
  task,
  changeStatus,
  pressed,
  onDelete
}: ListItemProps) {
  const [isSelected, setIsSelected] = useState(false)

  function handleChangeStatus() {
    changeStatus(id)
    setIsSelected(!isSelected)
  }

  return (
    <Pressable onPress={handleChangeStatus} style={styles.select}>
      <View style={styles.container}>
        {isSelected ? (
          <Text style={styles.icon}>
            <AntDesign name="checkcircle" size={24} color="#5E60CE" />
          </Text>
        ) : (
          <Entypo name="circle" size={24} color="#4EA8DE" />
        )}

        <Text style={[styles.task, isSelected && styles.checkedTask]}>
          {task}
        </Text>

        <TouchableOpacity
          onPress={onDelete}
          style={[styles.button, pressed && styles.pressedButton]}
        >
          <Feather
            name="trash-2"
            size={18}
            color={pressed ? '#E25858' : '#808080'}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  )
}
