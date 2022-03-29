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
import * as Localization from 'expo-localization'
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
        <ScrollView contentContainerStyle={{ padding: 12 }}>
          <View style={styles.titleContainer}>
            <TextInput placeholder='Add title' style={styles.titleInput} />
          </View>
          <View style={styles.dateContainerWrapper}>
            <View style={styles.dateItemWrapper}>
              <Icon
                name='clock'
                type='feather'
                color={iconColor}
                tvParallaxProperties={undefined}
              />
              <View style={styles.dateItemContainer}>
                <Text style={styles.normalTxt}>All-day</Text>
                <View style={styles.dateItemRight}>
                  <Switch
                    value={checked}
                    onValueChange={value => setChecked(value)}
                  />
                </View>
              </View>
            </View>
            <View style={styles.dateTimeContainer}>
              <View style={styles.dateSelectContainer}>
                <Text style={styles.normalTxt}>{moment().format('llll')}</Text>
                {!checked && (
                  <View style={styles.dateItemRight}>
                    <Text style={styles.normalTxt}>
                      {moment().format('LT')}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.dateTimeContainer}>
              <View style={styles.dateSelectContainer}>
                <Text style={styles.normalTxt}>{moment().format('llll')}</Text>
                {!checked && (
                  <View style={styles.dateItemRight}>
                    <Text style={styles.normalTxt}>
                      {moment().format('LT')}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            {!checked && (
              <View style={styles.dateItemWrapper}>
                <Icon
                  name='globe'
                  type='entypo'
                  color={iconColor}
                  tvParallaxProperties={undefined}
                />
                <View style={styles.dateItemContainer}>
                  <Text style={styles.normalTxt}>{Localization.timezone}</Text>
                </View>
              </View>
            )}
            <View style={[styles.dateItemWrapper, { paddingBottom: 0 }]}>
              <Icon
                name='reload1'
                type='ant-design'
                color={iconColor}
                tvParallaxProperties={undefined}
              />
              <View style={styles.dateItemContainer}>
                <Text style={styles.normalTxt}>Does not repeat</Text>
              </View>
            </View>
          </View>
          <View style={styles.listItemContainer}>
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
          <View style={styles.listItemContainer}>
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
          <View style={styles.listItemContainer}>
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
          <View style={styles.listItemContainer}>
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
          <View style={styles.listItemContainer}>
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
    marginTop: 10,
    marginRight: 4
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
    borderColor: '#dadce0',
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
  dateSelectContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 43,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dateItemRight: {
    marginLeft: 12,
    marginRight: 6
  },
  dateContainerWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#dadce0',
    borderBottomWidth: 1,
    paddingVertical: 25
  },
  dateItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15
  },
  dateTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 18
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    borderColor: '#dadce0',
    borderBottomWidth: 1
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
