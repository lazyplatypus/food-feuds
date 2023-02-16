import { useRouter } from 'next/router';
import { BigLink } from '../components/big-link';
import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

const AllowedPage: React.FC = () => {
  const {
    query: { country },
  } = useRouter();

  return (
    <>
      <Header
        headline="Smashing!"
        lede={`In the ${country}, smashburgers reign supreme.`}
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
        ]}
      />

      <BigLink href="/">Back to home</BigLink>
    </>
  );
};

export default AllowedPage;
