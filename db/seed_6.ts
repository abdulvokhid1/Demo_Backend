import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const sleep = async (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

const userList = [
  {
    email: 'user15@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 15',
    member_id: 'a0000016',
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
      connect: { id: 4 },
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
    email: 'user16@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 16',
    member_id: 'a0000017',
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
      connect: { id: 4 },
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
    email: 'user17@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 17',
    member_id: 'a0000018',
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
      connect: { id: 4 },
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
    email: 'user18@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 18',
    member_id: 'a0000019',
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
      connect: { id: 4 },
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
    email: 'user19@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 19',
    member_id: 'a0000020',
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
      connect: { id: 4 },
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
    email: 'user20@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 20',
    member_id: 'a0000021',
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
      connect: { id: 4 },
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
    email: 'user21@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 21',
    member_id: 'a0000022',
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
      connect: { id: 4 },
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
    email: 'user22@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 22',
    member_id: 'a0000023',
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
      connect: { id: 4 },
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
    email: 'user23@gmail.com',
    hashedPassword:
      '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
    name: 'User 23',
    member_id: 'a0000024',
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
      connect: { id: 4 },
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
