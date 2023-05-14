import { SolitoImage, SolitoImageProvider } from 'solito/image';

import SideNav from 'app/components/SideNav/SideNav'
import Slide1 from 'app/components/slides/slide1';
import Slide2 from 'app/components/slides/slide2';
import Slide3 from 'app/components/slides/slide3';
import Slide4 from 'app/components/slides/slide4';
import Slide5 from 'app/components/slides/slide5';
import SlideButton from 'app/components/Button/SlideButton';
import { Text } from 'app/design/typography'
import { UserSchema } from 'app/schema/index';
import { View } from 'app/design/view'
import image from "../../images/bg-sidebar-mobile.png"
import { sidenav_data } from 'app/data/sidenav'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

// import { TopBarImage } from "../../images/bg-sidebar-mobile.svg";

export function HomeScreen() {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, trigger, control, getValues, setValue, watch, formState: { errors } } = useForm({ resolver: zodResolver(UserSchema) });
  const RenderSlides = () => {
    return (<>
      {step == 0 ?
        <Slide1 register={register} setValue={setValue} errors={errors} control={control} />
        : null}
      {step == 1 ?
        <Slide2 register={register} getValues={getValues} setValue={setValue} />
        : null}
      {step == 2 ?
        <Slide3 register={register} getValues={getValues} setValue={setValue} />
        : null}
      {step == 3 ?
        <Slide4
          getValues={getValues}
        />
        : null}
      {step == 4 ?
        <Slide5 />
        : null}

      <SlideButton setStep={setStep} step={step} trigger={trigger} errors={errors} />
    </>)
  }
  return (
    <SolitoImageProvider nextJsURL='http://localhost:3000/'>
      <View className="block lg:hidden h-[200px] flex justify-center items-center pt-8">
        <SolitoImage
          src={image}
          resizeMode="cover"
          alt='Hero Image'
          fill />
        <View className="bg-no-repeat bg-cover h-[15rem] flex items-center justify-center flex-row">
          {sidenav_data.map((step_data_item, index) => (
            <SideNav
              key={index}
              step={step_data_item.step}
              title=""
              message=""
              state={index === step ? "active" : ""}
            />
          ))}
        </View>
      </View>
      <View className="flex flex-col items-center justify-start h-screen lg:justify-center lg:pb-0 lg:pt-0 bg-neutral-magnolia relative">
        <View className="absolute pb-8 mx-4 bg-white rounded-lg shadow-lg top-[-40px] lg:w-[65rem] lg:relative lg:top-0 lg:pb-0 h-[650px] md:h-[610px]">
          <View className="grid grid-cols-12 gap-8 lg:gap-6 md:gap-12">
            <View className="hidden col-span-12 lg:col-span-4  bg-no-repeat bg-center h-[38rem] lg:block relative bg-[url(/images/bg-sidebar-desktop.svg)]">
              <View className="absolute top-[4rem] left-[4rem]">
                {sidenav_data.map((step_data_item, index) => (
                  <SideNav
                    key={index}
                    step={step_data_item.step}
                    title={step_data_item.title}
                    message={step_data_item.message}
                    state={index === step ? "active" : ""}
                  />
                ))}
              </View>
            </View>
            <View className="col-span-12 px-8 py-5 lg:pr-[7rem] lg:col-span-8">
              {RenderSlides()}
            </View>
          </View>
        </View>
      </View>
    </SolitoImageProvider >
  )
}
