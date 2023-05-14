import { ComponentProps, forwardRef } from 'react'
import { Linking, Text as NativeText, Platform, Pressable, Switch, TextStyle, Touchable } from 'react-native'
import { StyledProps, styled } from 'nativewind'

import CheckBox from '@react-native-community/checkbox';
import { Controller } from 'react-hook-form';
import { TextInput as NativeTextInput } from 'react-native'
import { View } from './view';

export const Text = styled(NativeText)

export const PressableView = forwardRef<NativeTextInput, StyledProps<any>>(function TextInput({ onClick, className, component, id, ...props }, ref) {
  if (Platform.OS == "web")
    return <div className={className} id={id} {...props} ref={ref} onClick={onClick} >
      {component}
    </div>
  else
    return (<Pressable style={className} ref={ref} onPress={onClick} {...props}>
      <View className={className}>
        {component}
      </View>
    </Pressable>)
});


export const TextInput = forwardRef<NativeTextInput, StyledProps<any>>(function TextInput({ onChangeText, className, control, placeholder, value, id, ...props }, ref) {
  if (Platform.OS == "web")
    return <input className={className} value={value} id={id} {...props} ref={ref} />
  else
    return <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <NativeTextInput
          style={className}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          {...props}
        />
      )}
      name={id}
    />
});

export const CustomCheckBox = forwardRef<CheckBox, StyledProps<any>>(function CustomCheckBox({ onChangeHandler, type, value, id, className, ...props }, ref) {

  if (Platform.OS == "web")
    return <input
      type="checkbox"
      id={id}
      className={className}
      checked={value}
      onChange={onChangeHandler}
      {...props}
      ref={ref}
    />
  else {
    if (type == "checkbox")
      return (<CheckBox
        disabled={false}
        value={value}
        style={className}
        onChange={onChangeHandler}
        {...props}
      />)

    return (<StyledSwitch
      style={className}
      onValueChange={onChangeHandler}
      value={value}
      {...props}
    />)
  }
})

// export const StyledCheckBox = styled(CheckBox)
const StyledSwitch = styled(Switch)
export const StyledNativeTextInput = styled(NativeTextInput)