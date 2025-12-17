import { PrismaClient, Role, ProductStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  await prisma.cartItem.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.review.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.productVariant.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()

  const seller = await prisma.user.create({
    data: {
      email: 'seller@agora.com',
      name: 'Tech World',
      role: Role.SELLER,
      passwordHash: '$2b$10$dummy',
    },
  })

  const customer = await prisma.user.create({
    data: {
      email: 'customer@agora.com',
      name: 'Demo User',
      role: Role.CUSTOMER,
      passwordHash: '$2b$10$dummy',
    },
  })

  const electronics = await prisma.category.create({
    data: { name: 'Electronics', slug: 'electronics' },
  })
  
  const clothing = await prisma.category.create({
    data: { name: 'Clothing', slug: 'clothing' },
  })

  await prisma.product.create({
    data: {
      title: 'Sony WH-1000XM5',
      description: 'Noise cancelling headphones with 30hr battery.',
      status: ProductStatus.ACTIVE,
      sellerId: seller.id,
      categoryId: electronics.id,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800', altText: 'Black Headphones', isPrimary: true },
        ]
      },
      variants: {
        create: [
          { sku: 'SONY-XM5-BLK', name: 'Black', price: 349.99, stock: 50 },
          { sku: 'SONY-XM5-SLV', name: 'Silver', price: 349.99, stock: 20 },
        ]
      }
    }
  })

  await prisma.product.create({
    data: {
      title: 'Basic Heavyweight Tee',
      description: '100% Organic Cotton.',
      status: ProductStatus.ACTIVE,
      sellerId: seller.id,
      categoryId: clothing.id,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800', altText: 'White Tee', isPrimary: true },
        ]
      },
      variants: {
        create: [
          { sku: 'TEE-WHT-S', name: 'White / S', price: 25.00, stock: 100 },
          { sku: 'TEE-WHT-M', name: 'White / M', price: 25.00, stock: 85 },
          { sku: 'TEE-BLK-M', name: 'Black / M', price: 27.00, stock: 40 },
        ]
      }
    }
  })

  console.log('✅ Seed complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })