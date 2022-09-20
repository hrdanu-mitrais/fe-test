import { ReactComponent as Vegan } from '../assets/images/vegan.svg';
import { ReactComponent as Vegetarian } from '../assets/images/vegetarian.svg';
import { ReactComponent as GlutenFree } from '../assets/images/glutenFree.svg';
import { ReactComponent as NutFree } from '../assets/images/nutFree.svg';
import { ReactComponent as DairyFree } from '../assets/images/dairyFree.svg';
import { ReactComponent as Halal } from '../assets/images/halal.svg';
import { ReactComponent as EmptyLove } from '../assets/images/emptyLove.svg';
import { ReactComponent as FillLove } from '../assets/images/fillLove.svg';

const cardObj = [{
  title: 'Arancini $12',
  desc: 'Truffle & wild mushroom',
  loveCount: 68,
  buttonTitle: 'Vegetarian',
  Image: EmptyLove
},
{
  title: 'Burrata $22',
  desc: 'Cow’s milk burrata, patty pan squash, hazelnuts',
  loveCount: 72,
  buttonTitle: 'Vegetarian',
  Image: FillLove
}]
const getRandomObj = () => cardObj[Math.floor(Math.random() * 2)]

export const IconsData = [
  {
    Image: Vegan,
    desc: 'VGN',
    cardsData: Array(4).fill(null).map(getRandomObj)

  },
  {
    Image: Vegetarian,
    desc: 'VEG',
    cardsData: Array(8).fill(null).map(getRandomObj)
  },
  {
    Image: GlutenFree,
    desc: 'GF',
    cardsData: Array(5).fill(null).map(getRandomObj)
  },
  {
    Image: DairyFree,
    desc: 'DF',
    cardsData: Array(17).fill(null).map(getRandomObj)
  },
  {
    Image: NutFree,
    desc: 'NF',
    cardsData: Array(21).fill(null).map(getRandomObj)
  }, {
    Image: Halal,
    desc: 'HLL',
    cardsData: Array(10).fill(null).map(getRandomObj)
  }
]