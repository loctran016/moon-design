import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="email"
        inputSize="xsmall"
        label="xsmall"
        placeholder="e.g. jake.weary@sportsbet.io"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="email"
        inputSize="small"
        label="small"
        placeholder="e.g. jake.weary@sportsbet.io"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="email"
        inputSize="medium"
        label="medium"
        placeholder="e.g. jake.weary@sportsbet.io"
        hintText="Informative message holder"
      />
    </div>
  </div>
);

export default Example;
