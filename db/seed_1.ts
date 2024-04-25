import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// const userList = [
//   {
//     email: 'admin@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'Admin',
//     role: 'admin',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: ,
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user1@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 1',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user2@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 2',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user3@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 3',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user4@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 4',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user5@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 5',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user6@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 6',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user7@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 7',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user8@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 8',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user9@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 9',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user10@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 10',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user11@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 11',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user12@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 12',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user13@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 13',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user14@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 14',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user15@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 15',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user16@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 16',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user17@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 17',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user18@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 18',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user19@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 19',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user20@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 20',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user21@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 21',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user22@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 22',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
//   {
//     email: 'user23@gmail.com',
//     hashedPassword:
//       '$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I',
//     name: 'User 23',
//     role: 'user',
//     address: '',
//     address1: '',
//     addressdoro: '',
//     zip1: '',
//     zip2: '',
//     // centerId: authDTO.centerId,
//     zonecode: '',
//     mobilephone_number: '',
//     phone_number: '',
//     // recomid: '',
//     // sponid: '',
//     center: {
//       connect: {
//         id: 1,
//       },
//     },
//     Level: {
//       connect: {
//         id: 1,
//       },
//     },
//   },
// ];

const centerList = [
  {
    name: '본사',
    description: '본사',
    url: 'http://localhost:3001',
  },
];

const levelList = [
  {
    title: '준회원',
    description: '준회원',
    rank: 1,
    minBuy: 0,
    minSell: 0,
    minSub: 0,
    discountRate: 0,
    rewardRate: 25000,
    bgColor: '#FFFFFF',
    txtColor: '#000000',
  },
  {
    title: '정회원',
    description: '정회원',
    rank: 2,
    minBuy: 0,
    minSell: 0,
    minSub: 0,
    discountRate: 0,
    rewardRate: 25000,
    bgColor: '#FFFFFF',
    txtColor: '#000000',
  },
  {
    title: '대리점',
    description: '대리점',
    rank: 3,
    minBuy: 0,
    minSell: 0,
    minSub: 0,
    discountRate: 0,
    rewardRate: 25000,
    bgColor: '#FFFFFF',
    txtColor: '#000000',
  },
];

const centerSeed = async () => {
  centerList.map(async (item) => {
    await prisma.center.create({
      data: item,
    });
  });
  // await prisma.center.createMany({
  //   data: centerList,
  // });
};
const levelSeed = async () => {
  levelList.map(async (item) => {
    await prisma.companyLevel.create({
      data: item,
    });
  });
  // await prisma.companyLevel.createMany({
  //   data: levelList,
  // });
};
const main = async () => {
  try {
    await levelSeed();
    await centerSeed();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main().then(async () => {
  try {
    await prisma.$disconnect();
    console.log('seed_1.ts successfully.');
  } catch (e) {
    await prisma.$disconnect();
    process.exit(1);
  }
});
