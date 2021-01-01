import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/product-actions/fetchProductsAction";
import Slider from "./Slider";
import FirstComp from "./FirstComp";
import ProductsCarousel from "./ProductsCarousel";
import DealsOfTheDay from "./DealsOfTheDay";
import ExploreMore from "./ExploreMore";
import MiniOne from "./MiniOne";
import MiniTwo from "./MiniTwo";
import MiniThree from "./MiniThree";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container fluid>
      <Slider />
      <ProductsCarousel title='Popular Products' productsNumber='4' />
      <ProductsCarousel title='Featured Products' productsNumber='4' />
      <MiniOne title='Popular Products' productsNumber='8' />
      <MiniTwo title='Popular Products' productsNumber='8' />
      <MiniThree title='Popular Products' productsNumber='8' />
      <DealsOfTheDay productsNumber='3' />
      <ExploreMore />
    </Container>
  );
}

export default HomePage;
