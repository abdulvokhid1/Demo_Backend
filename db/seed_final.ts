import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const sleep = async (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

const firstSub = async () => {
  await prisma.$transaction([
    prisma.user.update({
      where: {
        id: 1,
      },
      data: {
        sub1: 2,
        sub2: 3,
      },
    }),
    prisma.user.update({
      where: {
        id: 2,
      },
      data: {
        sub1: 7,
        sub2: 8,
      },
    }),
    prisma.user.update({
      where: {
        id: 3,
      },
      data: {
        sub1: 11,
        sub2: 12,
      },
    }),
    prisma.user.update({
      where: {
        id: 4,
      },
      data: {
        sub1: 16,
        sub2: 17,
      },
    }),
  ]);
};

const main = async () => {
  try {
    await firstSub();
    console.log('users seed successfully.');
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main().then(async () => {
  try {
    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    process.exit(1);
  }
});
