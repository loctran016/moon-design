import React from 'react';
import { Label } from '@heathmont/moon-core';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full mb-4">
      <Label size="twoxsmall" iconLeft={<GenericInfo />}>
        Twoxsmall
      </Label>
      <Label size="twoxsmall" iconRight={<ControlsClose />}>
        Twoxsmall
      </Label>
      <Label
        size="twoxsmall"
        iconLeft={<GenericInfo />}
        iconRight={<ControlsClose />}
      >
        Twoxsmall
      </Label>
    </div>
    <div className="flex justify-around items-center w-full">
      <Label iconLeft={<GenericInfo />}>Xsmall</Label>
      <Label iconRight={<ControlsClose />}>Xsmall</Label>
      <Label iconLeft={<GenericInfo />} iconRight={<ControlsClose />}>
        Xsmall
      </Label>
    </div>
  </div>
);

export default Example;
