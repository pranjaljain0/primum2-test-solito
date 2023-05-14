import { PressableView, Text } from "app/design/typography"
import { handleNextStep, handlePrevStep } from "app/helpers/helper"

import { View } from "app/design/view"

function SlideButton({ setStep, step, trigger, errors }: any) {
    return (
        <>{step != 4 ?
            <View className={
                `flex 
                flex-row
                lg:mt-16 
                lg:py-10
                lg:px-[7rem]
                lg:bg-transparent
                lg:absolute
                lg:w-[49rem]
                lg:border-t-0
                fixed
                bottom-0
                right-0
                px-4
                bg-white 
                w-full py-3 mt-0 border-t-2 border-slate-300
                mt-[10px]
                ${step > 0 ? 'justify-between' : 'justify-end'}`}
            >
                {step > 0 ?
                    <Text onPress={() => handlePrevStep(setStep)} className="px-4 py-2 text-base transition rounded-md text-neutral-coolGray UbuntuBold hover:text-neutral-coolGray/50 hover:scale-90">
                        <Text>Go Back</Text>
                    </Text>
                    : null}
                <PressableView
                    id="slideButton"
                    onClick={() => {
                        trigger().then((res: any) => {
                            res && handleNextStep(setStep)
                        })
                    }}
                    component={<View className={`w-32 h-12 transition hover:scale-95 rounded-md flex justify-center items-center
                ${step == 3 ? 'bg-primary-purplishBlue hover:bg-primary-purplishBlue/90' : 'bg-primary-marineBlue hover:bg-primary-marineBlue/90'}
                `}><Text className="text-base text-white"> {step == 3 ? 'Confirm' : 'Next Step'}</Text></View>}
                />
            </View>
            : null}</>
    )
}

export default SlideButton