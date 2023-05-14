import { Text } from "app/design/typography";
import { View } from "app/design/view";
import { addOns } from "app/data/addOns";
import { plans } from "app/data/plans"

export default function Slide4({ getValues }: any) {
    var plan = plans[getValues("plan")]
    var anually = getValues("anually")
    const basePrice = plan != undefined && (anually ? plan.priceYr : plan.priceMo);

    var selectedAddOnsNames = JSON.parse(getValues("selectedAddOns"))

    var total: number | boolean = 0;
    var selectedAddOnsObject = []
    if (selectedAddOnsNames != undefined && selectedAddOnsNames != null && selectedAddOnsNames.length > 0) {
        selectedAddOnsObject = selectedAddOnsNames.map((item: any, index: any) => {
            return addOns.find(obj => obj.name === item)
        });
        total = basePrice + selectedAddOnsObject.reduce((a: any, b: any) => {
            if (anually)
                return a + b.priceAddYr
            else
                return a + b.priceAddMo
        }, 0);
    }
    else
        total = basePrice;

    return (<>
        <View className="pt-4 pb-4">
            <Text className='text-4xl UbuntuBold text-primary-marineBlue' style={{ margin: 0 }}>Finishing up</Text>
            <Text className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>Double-check everything looks OK before confirming.</Text>
        </View>
        <View>
            <View className="grid grid-cols-1 gap-6 ">
                <View className="px-8 py-4 rounded-md bg-neutral-magnolia">
                    <View className="flex items-center justify-between pb-5 border-b-[1.4px] border-neutral-lightGray flex-row">
                        <View className="flex items-start">
                            <Text className="text-base md:text-lg UbuntuBold text-primary-marineBlue">{
                                plan != undefined && plan.name} ({anually == false ? 'Monthly' : 'Yearly'})
                            </Text>
                            <Text
                                className="relative font-medium text-primary-purplishBlue before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-purplishBlue before:transition hover:before:scale-100"
                            >
                                Change
                            </Text>
                        </View>
                        <View>
                            <Text className="text-base md:text-lg UbuntuBold text-primary-marineBlue">
                                {anually == false ? '$' + basePrice + '/mo' : '$' + basePrice + '/yr'}
                            </Text>
                        </View>
                    </View>
                    <View className="flex items-center justify-between pt-5 flex-row">
                        <View className="space-y-4">
                            {selectedAddOnsObject !== null && selectedAddOnsObject.length != 0 && selectedAddOnsObject.map((item: any, index: number) => (
                                <Text className="text-sm md:text-base UbuntuRegular text-neutral-coolGray" key={index}>
                                    {item.name}
                                </Text>
                            ))}
                        </View>
                        <View className="space-y-4">
                            {selectedAddOnsObject.map((item: any, index: number) => (
                                <Text className="text-sm md:text-base UbuntuRegular text-primary-marineBlue" key={index}>
                                    {anually == false ? '+$' + item.priceAddMo + '/mo' : '+$' + item.priceAddYr + '/yr'}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
                <View className="flex items-center justify-between px-8 flex-row">
                    <View>
                        <Text className="text-sm md:text-base UbuntuRegular text-neutral-coolGray">
                            Total {anually == false ? '(per month)' : '(per year)'}
                        </Text>
                    </View>
                    <View>
                        <Text id="totalAmount" className="text-base md:text-lg UbuntuBold text-primary-purplishBlue">
                            {anually == false ? '$' + total + '/mo' : '$' + total + '/yr'}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </>)
}