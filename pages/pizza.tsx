import { BigLink } from '../components/big-link';
import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

export default function PizzaPage() {
  return (
    <>
      <Header
        headline="Pizza Punchout"
        lede="You can’t go wrong with pizza, but which style reigns supreme."
      />

      <Contenders
        contenders={[
          {
            name: 'New York Style',
            description: 'By the slice. Thin. Crispy. Delicious.',
            src: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&crop=bottom&q=80',
            alt: 'a slice of NY-style pepperoni pizza',
          },
          {
            name: 'Chicago Style',
            description: 'Deep dish, loaded with flavor, for cheese fans.',
            src: 'https://images.unsplash.com/photo-1582476927499-65372fb1a458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&crop=entropy&q=80',
            alt: 'a deep dish pizza with a cheesy slice being lifted out of the pan',
          },
        ]}
      />

      <BigLink href="/answer">Discover the Truth</BigLink>
    </>
  );
}
