import React from 'react';
import { ControlsClose } from '@heathmont/moon-icons';
import { components, ClearIndicatorProps } from 'react-select';

// any - https://github.com/JedWatson/react-select/issues/4804
const ClearIndicator = ({ ...rest }: ClearIndicatorProps<any>) => (
  <components.ClearIndicator {...rest}>
    <ControlsClose style={{ cursor: 'pointer' }} fontSize="1.5rem" />
  </components.ClearIndicator>
);

export default ClearIndicator;
