import { CustomCheckBox, PressableView, Text } from "app/design/typography";
import { useEffect, useState } from "react";

import { Platform } from "react-native";
import { SolitoImage } from "solito/image";
import { View } from "app/design/view";
import { plans } from "app/data/plans";

export default function Slide2({ register, setValue, getValues }: any) {
    const [tab, setTab] = useState(1);
    const [optionPrice, setOptionPrice] = useState(false);


    useEffect(() => {
        if (getValues('plan') !== undefined && getValues('plan') !== null) {
            setTab(getValues('plan') + 1)
            setOptionPrice(getValues('anually'))
        }
        else {
            setValue('plan', 0)
            setValue('anually', false)
        }
    }, [])

    return (<View>
        <View className="">
            <Text className='text-4xl UbuntuBold text-primary-marineBlue'>Select your plan</Text>
            <Text className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>You have the option of monthly or yearly billing.</Text>
        </View>
        <View className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-4">
            {plans.map((plan, index) => (
                <PressableView
                    key={plan.name}
                    id={plan.name}
                    onClick={() => {
                        setValue('plan', index)
                        setTab(index + 1)
                    }}
                    component={<View className={`flex border-[1.4px] flex-row items-center p-2 space-x-4 hover:border-primary-purplishBlue rounded-lg md:flex-col md:items-start md:space-x-0 cursor-pointer
                    ${tab != index + 1 ? ' border-neutral-lightGray' : 'border-primary-purplishBlue bg-neutral-magnolia'}`}>
                        <SolitoImage src={plan.icon} alt={`Picture of ${plan.name} plan`} width={40} height={40} />
                        <View className="pt-0 text-left md:pt-14">
                            <Text className="text-lg UbuntuMedium text-primary-marineBlue">{plan.name}</Text>
                            <Text className="text-sm UbuntuRegular text-neutral-coolGray">{optionPrice ? '+$' + plan.priceYr + '/yr' : '+$' + plan.priceMo + '/mo'}</Text>
                            <Text className="pt-1 text-xs UbuntuBold text-primary-marineBlue">{optionPrice ? '2 months free ' : ''}</Text>
                        </View>
                    </View>}
                />
            ))}
        </View>
        <View className="flex items-center justify-center p-4 mt-6 bg-neutral-alabaster" onClick={() => {
            setValue('anually', !optionPrice)
            setOptionPrice(!optionPrice)
        }}>
            <View className="flex items-center space-x-3 flex-row">
                <Text className={`text-sm UbuntuMedium  ${optionPrice == false ? 'text-primary-marineBlue' : 'text-neutral-coolGray'}`}>Monthly</Text>
                <PressableView

                    component={<View className="relative cursor-pointer h-7 w-14">
                        <CustomCheckBox
                            type="toggle"
                            id="anually"
                            className={`peer ${Platform.OS != "web" ? "peer-checked:bg-primary-marineBlue" : "sr-only"}`}
                            value={optionPrice ? true : false}
                            onChangeHandler={() => {
                                setValue('anually', !optionPrice)
                                setOptionPrice(!optionPrice)
                            }}
                        />
                        {Platform.OS == "web" && <View id="customSlider" className="absolute inset-0 transition rounded-full bg-neutral-lightGray peer-checked:bg-primary-marineBlue" />}
                        {Platform.OS == "web" && <View className="absolute inset-0 m-1 h-5 w-5 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:w-5 peer-checked:translate-x-7 peer-checked:bg-white peer-checked:ring-transparent" />}
                    </View>} />

                <Text className={`text-sm UbuntuMedium  ${optionPrice == true ? 'text-primary-marineBlue' : 'text-neutral-coolGray'}`}>Yearly</Text>
            </View>
        </View>
    </View>)
}