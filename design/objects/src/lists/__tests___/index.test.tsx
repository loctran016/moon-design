/** @jsx jsx */
import { jsx } from '@emotion/core';
import { create } from 'react-test-renderer';
import { listPlain, listPlainItem, listInline, listInlineItem } from '..';

describe('Lists', () => {
  describe('listPlain', () => {
    test('resets list-style-type correctly', () => {
      const list = create(
        <div>
          <ul css={listPlain}>
            <li css={listPlainItem}>Item 1</li>
            <li css={listPlainItem}>Item 2</li>
            <li css={listPlainItem}>Item 3</li>
          </ul>
          <ol css={listPlain}>
            <li css={listPlainItem}>Item 1</li>
            <li css={listPlainItem}>Item 2</li>
            <li css={listPlainItem}>Item 3</li>
          </ol>
        </div>
      );

      expect(list).toMatchSnapshot();
    });
  });

  describe('listInline', () => {
    test('renders lists inline', () => {
      const list = create(
        <div>
          <ul css={listInline}>
            <li css={listInlineItem}>Item 1</li>
            <li css={listInlineItem}>Item 2</li>
            <li css={listInlineItem}>Item 3</li>
          </ul>
          <ol css={listInline}>
            <li css={listInlineItem}>Item 1</li>
            <li css={listInlineItem}>Item 2</li>
            <li css={listInlineItem}>Item 3</li>
          </ol>
        </div>
      );

      expect(list).toMatchSnapshot();
    });
  });
});
