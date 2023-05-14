import InputWrapper from "../InputWrapper/InputWrapper";
import { Text } from "app/design/typography";
import { View } from "app/design/view";

export default function Slide1({
    register,
    errors,
    control,
    setValue
}: any) {
    return (
        <>
            <View className="pt-4 pb-4">
                <Text className='text-4xl UbuntuBold text-primary-marineBlue'>Personal info</Text>
                <Text className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>Please provide your name, email address, and phone number.</Text>
            </View>
            <View>
                <View id="user-info-form">
                    <InputWrapper
                        label="Name"
                        id='name'
                        name='name'
                        placeholder="e.g. Pranjal Jain"
                        register={register}
                        required
                        control={control}
                        errorMessage={errors.name ? errors.name : null}
                        setValue={setValue}
                    />
                    <InputWrapper
                        label="Email Address"
                        placeholder="e.g. pranjaljain0697@gmail.com"
                        id="email"
                        register={register}
                        required
                        name='email'
                        control={control}
                        errorMessage={errors.email ? errors.email : null}
                        setValue={setValue}
                    />
                    <InputWrapper
                        label="Phone Number"
                        placeholder="e.g. +1 973 517 7359"
                        id="phone"
                        name="phone"
                        register={register}
                        required
                        control={control}
                        errorMessage={errors.phone ? errors.phone : null}
                        setValue={setValue}
                    />
                </View>
            </View>
        </>)
}