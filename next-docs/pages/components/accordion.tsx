import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import ContentOutside from '../../public/examples/accordionNew/ContentOutside';
import Default from '../../public/examples/accordionNew/Default';
import DisableOpen from '../../public/examples/accordionNew/DisableOpen';
import HeaderContent from '../../public/examples/accordionNew/HeaderContent';
import OpenByDefault from '../../public/examples/accordionNew/OpenByDefault';
import Sizes from '../../public/examples/accordionNew/Sizes';
import SizesContentOutside from '../../public/examples/accordionNew/SizesContentOutside';
import WithoutButton from '../../public/examples/accordionNew/WithoutButton';
import useExamples from '../../utils/useExamples';

const PageAccordion = () => {
  const examples = useExamples('accordionNew');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Accordion New</h1>
        <p className="text-lg mt-4">
          Like the accordion instrument, our accordion component reveals or
          hides associated sections of content. This is done through the use of
          a vertically stacked list of headers.
        </p>
        <p className="text-lg mt-4">
          Users can decide which sections to toggle, read and close as the
          header titles will give them a high-level overview of the content
          that’s in the space.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          isGrayBg
          preview={<Default />}
          code={examples.Default ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Open by default"
          isGrayBg
          preview={<OpenByDefault />}
          code={examples.OpenByDefault ? examples.OpenByDefault : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Without button"
          isGrayBg
          preview={<WithoutButton />}
          code={examples.WithoutButton ? examples.WithoutButton : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Disable open"
          isGrayBg
          preview={<DisableOpen />}
          code={examples.DisableOpen ? examples.DisableOpen : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Content outside"
          isGrayBg
          preview={<ContentOutside />}
          code={examples.ContentOutside ? examples.ContentOutside : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Header content"
          isGrayBg
          preview={<HeaderContent />}
          code={examples.HeaderContent ? examples.HeaderContent : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples.Sizes ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes: content outside"
          isGrayBg
          preview={<SizesContentOutside />}
          code={
            examples.SizesContentOutside
              ? examples.SizesContentOutside
              : 'Loading'
          }
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'title',
            type: 'string',
            required: true,
            default: '-',
            description: 'Title of accordion',
          },
          {
            name: 'openByDefault',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Expanded/collapsed accordion by default',
          },
          {
            name: 'withButton',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Show expand/collapse chevron',
          },
          {
            name: 'disableOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disable expand/collapse accordion',
          },
          {
            name: 'headerContent',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Additional content to render in accordion header',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: true,
            default: '-',
            description: 'Content to show inside of accordion',
          },
          {
            name: 'size',
            type: 'xlarge | large | medium | small',
            required: false,
            default: 'xlarge',
            description: 'Size variant of accordion',
          },
          {
            name: 'isContentInside',
            type: 'boolean',
            required: false,
            default: 'true',
            description:
              'Whether the content is displayed outside of the accordion header',
          },
        ]}
      />
    </>
  );
};

export default PageAccordion;
