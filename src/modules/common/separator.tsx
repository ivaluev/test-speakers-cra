/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default function Separator() {
  return <div css={css`
    height: 1px;
    background: gainsboro;
  `}></div>;
}