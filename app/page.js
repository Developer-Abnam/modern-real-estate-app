import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageURL }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageURL} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};
export default function Home() {
  return (
    <div>
      <h1>Hello World 3</h1>
      <Banner 
      purpose="RENT A HOME" 
      title1='Rental Home for'
      title2='Everyone'
      desc1='Explore Villas, Apartment, Homes'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageURL='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Banner 
      purpose="BUY A HOME" 
      title1='Find, Buy & Own Your'
      title2='Dream Home'
      desc1='Explore Villas, Apartment, Homes'
      desc2='and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageURL='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
    </div>
  );
}
