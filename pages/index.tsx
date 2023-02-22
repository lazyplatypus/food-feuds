import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

export default function IndexPage() {
  return (
    <>
      <Header
        headline="Burger Brawl"
        lede="Which of these burgers is ballin’, and which is dead meat?"
      />

      <Contenders
        contenders={[
          {
            name: 'Smashburgers',
            description:
              'The smashburger is simple, classic, and packed with flavor.',
            src: 'https://res.cloudinary.com/jlengstorf/image/upload/w_500,h_500,g_faces,c_fill/v1676500102/food-feud/smash.jpg',
            alt: 'a smashburger',
          },
          {
            name: 'Sous Vide Burgers',
            description: 'Sous vide means perfectly cooked burgers every time.',
            src: 'https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_500,h_500,c_fill,g_faces/v1676500100/food-feud/sous-vide.jpg',
            alt: 'a sous vide burger',
          },
        ]}
      />
    </>
  );
}
