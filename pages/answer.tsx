import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

export default function IndexPage() {
  return (
    <>
      <Header headline="The Best Burger? Smash Burger!" lede="Obvs." />

      <Contenders
        contenders={[
          {
            name: 'Smashburgers',
            description:
              'The smashburger is simple, classic, and packed with flavor.',
            src: 'https://res.cloudinary.com/jlengstorf/image/upload/w_500,h_500,g_faces,c_fill/v1676500102/food-feud/smash.jpg',
            alt: 'a smashburger',
          },
        ]}
      />
    </>
  );
}
