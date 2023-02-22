import { Contenders } from '../components/contenders';
import { Header } from '../components/header';

export default function IndexPage() {
  return (
    <>
      <Header headline="The Best Burger? Chicago Style!" lede="Da Bears." />

      <Contenders
        contenders={[
          {
            name: 'Chicago Style',
            description: 'Deep dish, loaded with flavor, for cheese fans.',
            src: 'https://images.unsplash.com/photo-1582476927499-65372fb1a458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&crop=entropy&q=80',
            alt: 'a deep dish pizza with a cheesy slice being lifted out of the pan',
          },
        ]}
      />
    </>
  );
}
