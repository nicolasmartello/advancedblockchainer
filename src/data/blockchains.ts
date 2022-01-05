import avalanche from '../../public/assets/icons/avalanche.svg';
import ethereum from '../../public/assets/icons/ethereum.svg';
import polygon from '../../public/assets/icons/polygon.svg';

export type BlockChainsType = {
  name: string;
  icon?: string;
}

const blockChains: BlockChainsType[] = [{
  name: 'ETH',
  icon: ethereum,
}, {
  name: 'Matic',
  icon: polygon,
}, {
  name:'AVAX',
  icon: avalanche,
}];

export default blockChains;