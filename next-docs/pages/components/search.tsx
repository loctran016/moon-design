import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from "../../components/PropsTable";
import OmitResults from "../../public/examples/search/OmitResults";
import PreviewSearch from '../../public/examples/search/PreviewSearch';
import PreviewSearchLoading from '../../public/examples/search/PreviewSearchLoading';
import useExamples from '../../utils/useExamples';

export default function PageSearch() {
  const examples = useExamples('search');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Search</h1>
        <p className="text-lg mt-4">An elegant search component.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Search component default values"
          preview={<PreviewSearch />}
          code={examples ? examples.PreviewSearch : 'Loading'}
        />
      </section>

      {/* Loading */}
      <section className="mt-8">
        <Preview
          title="Search loading"
          preview={<PreviewSearchLoading />}
          code={examples ? examples.PreviewSearchLoading : 'Loading'}
        />
      </section>

      {/* Without results popup */}
      <section className="mt-8">
        <Preview
          title="Without results"
          preview={<OmitResults />}
          code={examples ? examples.OmitResults : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Search input placeholder',
          },
          {
            name: 'isOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Open/close search',
          },
          {
            name: 'onSubmit',
            type: 'React.ReactFormEvent',
            required: false,
            default: '-',
            description: 'Event that happens on submit',
          },
          {
            name: 'size',
            type: 'SearchInputSize',
            required: false,
            default: '-',
            description: 'Search input size',
          },
          {
            name: 'onChange',
            type: 'React.ChangeEvent',
            required: false,
            default: '-',
            description: 'Event that happens when user types something',
          },
          {
            name: 'closeButton',
            type: 'JSX.element',
            required: false,
            default: '-',
            description: 'Specify close button',
          },
          {
            name: 'hasBorder',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Display border around search input',
          },
          {
            name: 'onBlur',
            type: 'React.FocusEvent',
            required: false,
            default: '-',
            description: 'Event that happens when user clicks outside of search input',
          },
          {
            name: 'onClear',
            type: 'React.MouseEvent',
            required: false,
            default: '-',
            description: 'Event that happens when user clears search input',
          },
          {
            name: 'onFocus',
            type: 'React.FocusEvent',
            required: false,
            default: '-',
            description: 'Event that happens when user clicks on search input',
          },
          {
            name: 'onKeyDown',
            type: 'React.KeyboardEvent',
            required: false,
            default: '-',
            description: 'Event that happens when user presses the key',
          },
          {
            name: 'onKeyUp',
            type: 'React.KeyboardEvent',
            required: false,
            default: '-',
            description: 'Event that happens when user releases the key',
          },
          {
            name: 'query',
            type: 'string',
            required: false,
            default: '-',
            description: '-',
          },
          {
            name: 'results',
            type: 'JSX.Elements',
            required: false,
            default: '-',
            description: 'Results from search query',
          },
        ]}
      />
    </>
  );
}
