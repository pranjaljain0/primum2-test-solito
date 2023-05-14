import { CustomCheckBox, PressableView, Text } from "app/design/typography";
import { useCallback, useEffect, useState } from "react";

import { View } from "app/design/view";
import { addOn } from "app/types";
import { addOns } from "app/data/addOns";

export default function Slide3({ register, getValues, setValue }: any) {
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const handleClick = (addOn: addOn) => {
        let newSelectedAddOns = [...selectedAddOns];
        if (newSelectedAddOns.includes(addOn.name)) {
            newSelectedAddOns = newSelectedAddOns.filter(
                name => name !== addOn.name
            );
        } else {
            newSelectedAddOns.push(addOn.name);
        }
        setSelectedAddOns(newSelectedAddOns);
        setValue('selectedAddOns',
            JSON.stringify(newSelectedAddOns))
    }

    useEffect(() => {
        if (getValues("selectedAddOns") !== undefined && getValues("selectedAddOns") !== null) {
            setSelectedAddOns(JSON.parse(getValues("selectedAddOns")))
        }
        else {
            setValue('selectedAddOns',
                JSON.stringify({}))
        }
    }, [])

    return (<>
        <View className="pt-4 pb-4">
            <Text className='text-4xl UbuntuBold text-primary-marineBlue'>Pick add-ons</Text>
            <Text className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>Add-ons help enhance your gaming experience.</Text>
        </View>
        <View className="grid grid-cols-1 gap-6">
            <View className="space-y-4 mb-4">
                {addOns.map((addOnItem: addOn, index) => (
                    <PressableView key={index} onClick={() => handleClick(addOnItem)} component={<View className="relative flex flex-row justify-center items-center">
                        <View className="
                            flex 
                            flex-row
                            cursor-pointer 
                            items-center 
                            justify-between 
                            rounded-lg 
                            border-[1.4px]
                            w-full
                            hover:border-primary-purplishBlue 
                            border-neutral-lightGray p-4 text-sm 
                            peer-checked:border-primary-purplishBlue 
                            peer-checked:bg-neutral-magnolia">
                            <View>
                                <CustomCheckBox
                                    type="checkbox"
                                    name="add_on"
                                    // value={addOnItem.name}
                                    id={addOnItem.id}
                                    value={selectedAddOns !== null && selectedAddOns !== undefined && Object.keys(selectedAddOns).length !== 0 && selectedAddOns.includes(addOnItem.name)}
                                    className="peer w-5 h-5 accent-primary-purplishBlue rounded-lg"
                                    onChangeHandler={() => handleClick(addOnItem)}
                                />
                            </View>
                            <View className="pl-8 lg:pl-10 flex-1">
                                <Text className="text-sm lg:text-base text-primary-marineBlue" style={{ margin: 0 }}>{addOnItem.name}</Text>
                                <Text className="text-xs lg:text-sm text-neutral-coolGray" style={{ margin: 0 }}>{addOnItem.desc}</Text>
                            </View>
                            <View>
                                <Text className="text-sm lg:text-base text-primary-purplishBlue UbuntuMedium m-0 p-0">
                                    {!getValues("anually") ? '+$' + addOnItem.priceAddMo + '/mo' : '+$' + addOnItem.priceAddYr + '/yr'}
                                </Text>
                            </View>
                        </View>
                    </View>}>

                    </PressableView>
                ))}

            </View>
        </View>
    </>)
}