import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Icon, Text, Switch } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment'

const iconColor = 'rgba(102, 102, 102, 0.9)'

export default function App () {
  const [checked, setChecked] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment())

  const toggleSwitch = () => {
    setChecked(!checked)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnTxt}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.titleContainer}>
            <TextInput placeholder='Add title' style={styles.titleInput} />
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name='clock'
              type='feather'
              color={iconColor}
              tvParallaxProperties={undefined}
            />
            <View style={styles.dateItemContainer}>
              <View>
                <Text style={styles.normalTxt}>All-day</Text>
              </View>
              <View style={styles.dateItemRight}>
                <Switch
                  value={checked}
                  onValueChange={value => setChecked(value)}
                />
              </View>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name='users'
              type='feather'
              color={iconColor}
              tvParallaxProperties={undefined}
            />
            <TouchableOpacity>
              <Text h4 h4Style={styles.btnTextItem}>
                Add guests
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name='location-on'
              type='evil-icons'
              color={iconColor}
              tvParallaxProperties={undefined}
            />
            <TouchableOpacity>
              <Text h4 h4Style={styles.btnTextItem}>
                Add location
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name='video'
              type='feather'
              color={iconColor}
              tvParallaxProperties={undefined}
            />
            <TouchableOpacity>
              <Text h4 h4Style={styles.btnTextItem}>
                Add video conferencing
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name='align-left'
              type='feather'
              color={iconColor}
              tvParallaxProperties={undefined}
            />
            <TouchableOpacity>
              <Text h4 h4Style={styles.btnTextItem}>
                Add description
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name='attach-file'
              type='material-icons'
              color={iconColor}
              tvParallaxProperties={undefined}
            />
            <TouchableOpacity>
              <Text h4 h4Style={styles.btnTextItem}>
                Add attachment
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    padding: 14
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    paddingVertical: 7,
    backgroundColor: '#1a73e8',
    borderRadius: 50
  },
  btnTxt: {
    color: '#fff'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: { iconColor },
    borderBottomWidth: 1
  },
  titleInput: {
    fontSize: 22
  },
  dateItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dateItemRight: {
    marginLeft: 10
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    // borderTopWidth: 1,
    borderColor: { iconColor },
    borderBottomWidth: 1
    // backgroundColor: 'red'
  },
  btnTextItem: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#70757a',
    fontWeight: '400',
    marginLeft: 10
  },
  normalTxt: {
    fontSize: 16
  }
})
