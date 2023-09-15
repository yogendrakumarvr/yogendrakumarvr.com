import Heading1 from '../mdx/Heading1.astro';
import Heading2 from '../mdx/Heading2.astro';
import Heading3 from '../mdx/Heading3.astro';
import NormalText from '../mdx/NormalText.astro';
import Strong from '../mdx/Strong.astro';

export const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: NormalText,
  strong: Strong,
};
