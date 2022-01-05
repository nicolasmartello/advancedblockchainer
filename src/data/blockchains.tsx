import { ReactElement } from 'react';
import Avalanche from '../../public/assets/icons/avalanche.svg';
import Ethereum from '../../public/assets/icons/ethereum.svg';
import Polygon from '../../public/assets/icons/polygon.svg';

export type BlockChainsType = {
  name: string;
  svg?: ReactElement;
}

const blockChains: BlockChainsType[] = [{
  name: 'ETH',
  svg: <Ethereum />,
}, {
  name: 'Matic',
  svg: <Polygon />,
}, {
  name:'AVAX',
  svg: <Avalanche />,
}];

export default blockChains;