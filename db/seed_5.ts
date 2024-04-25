import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const sleep = async (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

const userList = [
  {
    email: 'user10@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 10',
    member_id: 'a0000011',
    role: 'user',
    address: '',
    address1: '',
    addressdoro: '',
    zip1: '',
    zip2: '',
    // centerId: authDTO.centerId,
    zonecode: '',
    mobilephone_number: '',
    phone_number: '',
    recom: {
      connect: { id: 3 },
    },
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
  {
    email: 'user11@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 11',
    member_id: 'a0000012',
    role: 'user',
    address: '',
    address1: '',
    addressdoro: '',
    zip1: '',
    zip2: '',
    // centerId: authDTO.centerId,
    zonecode: '',
    mobilephone_number: '',
    phone_number: '',
    recom: {
      connect: { id: 3 },
    },
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
  {
    email: 'user12@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 12',
    member_id: 'a0000013',
    role: 'user',
    address: '',
    address1: '',
    addressdoro: '',
    zip1: '',
    zip2: '',
    // centerId: authDTO.centerId,
    zonecode: '',
    mobilephone_number: '',
    phone_number: '',
    recom: {
      connect: { id: 3 },
    },
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
  {
    email: 'user13@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 13',
    member_id: 'a0000014',
    role: 'user',
    address: '',
    address1: '',
    addressdoro: '',
    zip1: '',
    zip2: '',
    // centerId: authDTO.centerId,
    zonecode: '',
    mobilephone_number: '',
    phone_number: '',
    recom: {
      connect: { id: 3 },
    },
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
  {
    email: 'user14@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 14',
    member_id: 'a0000015',
    role: 'user',
    address: '',
    address1: '',
    addressdoro: '',
    zip1: '',
    zip2: '',
    // centerId: authDTO.centerId,
    zonecode: '',
    mobilephone_number: '',
    phone_number: '',
    recom: {
      connect: { id: 3 },
    },
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
];
const userSeed = async () => {
  userList.map(async (item) => {
    await prisma.user.create({
      data: item,
    });
  });
  // await prisma.user.createMany({
  //   data: userList,
  // });
};

const main = async () => {
  try {
    await userSeed();
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
