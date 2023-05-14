import { Text, TextInput } from "app/design/typography"

import { View } from "app/design/view"

function InputWrapper({
    label,
    errorMessage = null,
    register,
    name,
    placeholder,
    value,
    control,
    id,
    setValue
}: any) {
    return (
        <View className="mb-6">
            <View className="flex items-center justify-between px-[0.10rem] flex-row">
                <Text
                    className="block mb-2 text-sm font-medium text-gray-900 UbuntuMedium">
                    {label}
                </Text>
                <Text
                    className="block pr-2 mb-2 text-sm font-medium text-primary-strawberry UbuntuMedium">
                    {errorMessage?.message}
                </Text>
            </View>
            <TextInput
                className={errorMessage == null ?
                    'outline-none border-[1.5px] border-neutral-coolGray UbuntuMedium  text-primary-marineBlue text-base rounded-lg  focus:border-none block w-full p-3 focus:outline-neutral-coolGray '
                    :
                    'outline-none border-[1.5px] border-primary-strawberry UbuntuMedium text-primary-strawberry text-base rounded-lg focus:border-none block w-full p-3 focus:outline-primary-strawberry'
                }
                placeholder={placeholder}
                value={value}
                id={id}
                name={name}
                control={control}
                onChangeText={(e: string) => {
                    setValue(label, e)
                }}
                {...register(id, {
                    required: `${label} is required`,
                })}
            />
        </View>
    )
}

export default InputWrapper