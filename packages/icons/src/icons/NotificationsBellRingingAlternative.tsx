import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.59 21.534l.433.25.25-.433-.433-.25-.25.433zm-4.972-2.871l.25-.433-.433-.25-.25.433.433.25zm-.62-.553l-.25.433.25-.433zm11.628 6.714l.25-.433-.25.433zm1.724-.7l.455.205-.455-.206zm-13.6-7.867l-.404-.294.404.294zm11.314-8.145l.433.25-.433-.25zm3.688 2.129l.433.25-.433-.25zm-.21.363l-.433-.25-.164.285.196.264.401-.299zm.831 5.224l.487.114-.487-.114zm-9.507-5.415l.345.362-.345-.362zm4.988-1.938l-.058.497.327.038.164-.285-.433-.25zm2.596 15.09h-.5.5zm0-1.677h.5-.5zm.762-3.408l-.453-.213.453.213zm.848-1.802l-.452-.213.452.213zm-14.896-.773l.255.43-.255-.43zm1.497-.89l-.255-.43.255.43zm2.41-2.206l-.406-.292.406.292zm1.296-1.803l.406.292-.406-.292zm-.21 10.277a2.37 2.37 0 01-3.238.868l-.5.866a3.37 3.37 0 004.604-1.233l-.866-.5zm-3.238.868a2.37 2.37 0 01-.868-3.238l-.866-.5a3.37 3.37 0 001.234 4.604l.5-.866zm-1.551-3.055l4.972 2.87.5-.866-4.972-2.87-.5.866zm-.62-.553l11.628 6.714.5-.866-11.628-6.714-.5.866zm11.628 6.714c.49.283 1.01.3 1.463.095.437-.198.766-.58.966-1.023l-.911-.412c-.124.275-.3.448-.468.524-.15.068-.33.077-.55-.05l-.5.866zm-12.03-9.294c-.288.395-.457.874-.413 1.353.047.498.322.943.815 1.227l.5-.866c-.222-.128-.304-.29-.319-.454-.017-.184.047-.426.225-.672l-.808-.588zm12.151-7.601a1.63 1.63 0 012.225-.596l.5-.866a2.629 2.629 0 00-3.591.962l.866.5zm2.225-.596c.78.45 1.047 1.446.597 2.225l.866.5a2.629 2.629 0 00-.963-3.591l-.5.866zm.42 3.137c1.262 1.696.963 3.873.744 4.811l.974.227c.231-.991.627-3.562-.917-5.635l-.802.597zm.833-.049l.21-.363-.866-.5-.21.363.866.5zm-8.764-.079c.668-.637 2.435-2.055 4.585-1.803l.116-.994c-2.626-.307-4.688 1.403-5.39 2.074l.69.723zm5.076-2.05l.21-.363-.866-.5-.21.363.866.5zm2.663 14.84v-1.677h-1v1.677h1zm.714-4.872l.848-1.802-.904-.426-.849 1.802.905.426zM8.42 16.335l1.497-.89-.51-.86-1.497.89.51.86zm4.057-3.234l1.297-1.803-.812-.584-1.296 1.803.812.584zm9.33 11.228a1.84 1.84 0 00.144-.764h-1c0 .16-.02.271-.056.352l.911.412zM8.153 16.551a.866.866 0 01.265-.216l-.51-.86a1.842 1.842 0 00-.563.488l.808.588zm13.796 5.337c0-1.105.244-2.196.714-3.195l-.905-.426a8.501 8.501 0 00-.81 3.62h1zM9.916 15.446a8.5 8.5 0 002.56-2.345l-.811-.584a7.503 7.503 0 01-2.26 2.069l.511.86zm3.605-5.394a4.66 4.66 0 00-.56.662l.812.584c.145-.2.284-.375.438-.523l-.69-.723zm9.365 5.662c-.057.246-.155.49-.278.751l.904.426c.136-.287.268-.604.348-.95l-.974-.227z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsBellRingingAlternative =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default NotificationsBellRingingAlternative;
