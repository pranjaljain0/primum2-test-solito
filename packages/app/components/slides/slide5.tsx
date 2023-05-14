import { useEffect, useState } from "react";

import { Image as MotiImage } from "moti"
import { SolitoImage } from "solito/image";
import { Text } from "app/design/typography";
import { View } from "app/design/view";
import thankyou from "app/images/icon-thank-you.png"

// import lottie from 'lottie-web';

export default function Slide5() {
    const [showThanks, setShowThanks] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowThanks(true);
        }, 4000);
    }, []);

    return (<View className="grid grid-cols-1 gap-6 ">
        <View className="flex items-center justify-center h-[33rem] relative">
            <View className="flex flex-col items-center max-w-lg space-y-6 text-center">
                {!showThanks ? (
                    <View>
                        <MotiImage
                            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" }}
                            style={{
                                width: 227,
                                height: 200,
                            }}
                            from={{
                                rotate: "0deg",
                            }}
                            animate={{
                                rotate: "360deg",
                            }}
                            transition={{
                                loop: true,
                                repeatReverse: false,
                                type: "timing",
                                duration: 3000,
                            }}

                        />
                    </View>
                ) : (
                    <>
                        <SolitoImage src={thankyou} alt={`Picture of CheckMark`} width={100} height={100} />
                        <Text className="text-3xl UbuntuBold text-primary-marineBlue">Thank you!</Text>
                        <Text className="text-lg UbuntuRegular text-neutral-coolGray">
                            Thanks for confirming your subscription! We hope you have fun using our platform.
                            If you ever need support, please feel free to email us at <Text className="cursor-pointer relative font-medium text-primary-purplishBlue before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100">
                                support@loremgaming.com.
                            </Text>
                        </Text>
                    </>
                )}
            </View>
        </View>
    </View>)
}