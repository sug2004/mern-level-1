import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react";
// import {Link} from 'react-router-dom'; 
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {

	const {fetchProducts,products} = useProductStore();

	useEffect(()=>{fetchProducts();},[fetchProducts]);

	console.log("products",products)

  return (
	<Container maxW='container.x1' py={12}>
		<VStack spacing={8} >
			<Text
			fontSize={"30"}
			fontWeight={"bold"}
			bgGradient={"linear(to-r,cyan.400,blue.500)"}
			bgClip={"text"}
			textAlign={"center"}
			>
				Current Products 🚀
			</Text>

			<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={20}
					w={"auto"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

			{
				products.length === 0 && (
					<Text
						fontSize={"xl"}
						fontWeight={"bold"}
						bgGradient={"linear(to-r, cyan.400, blue.500)"}
						bgClip={"text"}
						textAlign={"center"}
					>
						No Products Found ��
					</Text>
				)
			}

		</VStack>
	</Container>
  )
}

export default HomePage
