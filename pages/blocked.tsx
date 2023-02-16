import { useRouter } from 'next/router';
import { BigLink } from '../components/big-link';
import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

export default function AllowedPage() {
  const {
    query: { country },
  } = useRouter();

  return (
    <>
      <Header
        headline="Burger Fail"
        lede={`Clearly you don’t appreciate burgers.`}
      />

      <Contenders
        contenders={[
          {
            name: 'Sous Vide Burgers',
            description: 'Sous vide means perfectly cooked burgers every time.',
            src: 'https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_500,h_500,c_fill,g_faces/v1676500100/food-feud/sous-vide.jpg',
            alt: 'a sous vide burger',
          },
        ]}
      />

      <BigLink href="/">Back to home</BigLink>
    </>
  );
}
