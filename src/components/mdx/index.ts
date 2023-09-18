import Heading1 from './Heading1.astro';
import Heading2 from './Heading2.astro';
import Heading3 from './Heading3.astro';
import Heading4 from './Heading4.astro';
import NormalText from './NormalText.astro';
import Link from './Link.astro';
import Image from './Image.astro';
import ListItem from './ListItem.astro';
import UnorderedList from './UnorderedList.astro';
import OrderedList from './OrderedList.astro';
import Pre from './Pre.astro';
import Blockquote from './Blockquote.astro';

export const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  p: NormalText,
  a: Link,
  img: Image,
  li: ListItem,
  ul: UnorderedList,
  ol: OrderedList,
  pre: Pre,
  blockquote: Blockquote,
};
