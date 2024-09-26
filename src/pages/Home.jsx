import React from "react";
import Container from "../components/Container";
import Hero from "../components/home/Hero";
import NewArrival from "../components/home/NewArrival";
import Collection from "../components/home/Collection";

const Home = () => {
  return (
    <section className="">
      <Container>
        <Hero />
        <NewArrival />
        <Collection/>
      </Container>
    </section>
  );
};

export default Home;
