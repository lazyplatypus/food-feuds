import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

export default function IndexPage() {
  return (
    <>
      <Header
        headline="The Best Burger? New York Style!"
        lede="Fuggeddaboutit."
      />

      <Contenders
        contenders={[
          {
            name: 'New York Style',
            description: 'By the slice. Thin. Crispy. Delicious.',
            src: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&crop=bottom&q=80',
            alt: 'a slice of NY-style pepperoni pizza',
          },
        ]}
      />
    </>
  );
}
