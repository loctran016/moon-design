import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="text"
        inputSize="xsmall"
        label="xsmall"
        placeholder="Placeholder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="text"
        inputSize="small"
        label="small"
        placeholder="Placeholder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="text"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
      />
    </div>
  </div>
);

export default Example;
