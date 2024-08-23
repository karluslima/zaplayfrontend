import { Image, Text, Box } from '@chakra-ui/react';

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.image} alt={product.name} />
      <Box p="6">
        <Text fontSize="xl" fontWeight="bold">
          {product.name}
        </Text>
        <Text color="gray.500">
          {product.brand} - {product.category}
        </Text>
        <Text fontSize="2xl">R$ {product.price}</Text>
      </Box>
    </Box>
  );
};