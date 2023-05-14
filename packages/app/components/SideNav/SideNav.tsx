import { Text } from "app/design/typography"
import { View } from "app/design/view"

function SideNav({
    step,
    title,
    message,
    state,
}: any) {
    return (
        <View className="relative flex items-start mb-5 space-x-4 flex-row">
            <View>
                <View className={
                    state == 'active' ? 'absolute inline-flex w-12 h-12 rounded-full opacity-30 animate-ping bg-primary-lightBlue lg:w-9 lg:h-9' : ''}>
                </View>
                <View className={
                    state == 'active' ?
                        'flex items-center justify-center mb-2 border-none rounded-full h-12 w-12 lg:w-9 lg:h-9 text-primary-marineBlue bg-primary-lightBlue UbuntuMediu z-40'
                        :
                        'flex items-center justify-center mb-2 text-white border-[1.5px] border-white rounded-full h-12 w-12 lg:w-9 lg:h-9 bg-trasparent UbuntuMedium'
                }><Text className={state == 'active' ? "text-black" : "text-white"}>{step}</Text>
                </View>
            </View>
            <View className="">
                {title &&
                    <Text className="text-xs text-neutral-lightGray UbuntuMedium">{title}</Text>
                }
                {message &&
                    <Text className="text-sm text-white UbuntuMedium">{message}</Text>
                }
            </View>
        </View>
    )
}

export default SideNav