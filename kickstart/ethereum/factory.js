import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd9f909D8cFeE26E7c14DB3680f6AA70B7AF13249'
);

export default instance;