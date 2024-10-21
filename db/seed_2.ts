import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const sleep = async (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

const main = async () => {
  try {
    await prisma.user.create({
      data: {
        email: 'master@gmail.com',
        hashedPassword:
          '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
        name: 'master',
        member_id: 'master',
        role: 'admin',
        address: '',
        address1: '',
        addressdoro: '',
        zip1: '',
        zip2: '',
        // centerId: authDTO.centerId,
        zonecode: '',
        mobilephone_number: '',
        phone_number: '',
        // recom: {
        //   connect: { id: 1 },
        // },
        // sponid: '',
        center: {
          connect: {
            id: 1,
          },
        },
        Level: {
          connect: {
            id: 1,
          },
        },
      },
    });
    await sleep(500);
    console.log('admin seed successfully.');
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
